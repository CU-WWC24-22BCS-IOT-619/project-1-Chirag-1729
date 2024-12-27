// // import React from 'react';
// import './index.css';

// import FishingGame from './components/FishingGame';

// function App() {
//   return <FishingGame />;
// }

// export default App;






import React, { useState } from 'react';
import './index.css';
import { useFishingGame } from './hooks/useFishingGame';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const {
    isCasting,
    power,
    isReeling,
    caughtFish,
    gameMessage,
    handleCastStart,
    handleCastEnd,
    handleReel,
  } = useFishingGame();

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Bubbles */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${Math.random() * 50 + 10}px`,
            height: `${Math.random() * 50 + 10}px`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {!isGameStarted ? (
        // Welcome Screen
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold">Welcome to the Ocean Fishing Game!</h1>
          <button
            className="mt-4 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white"
            onClick={startGame}
          >
            Start Fishing
          </button>
        </div>
      ) : (
        // Game Screen
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-bold">Fishing Game</h2>
          <div className="relative w-3/4 h-8 bg-gray-200 rounded-md">
            <div
              className="absolute h-full bg-green-500 rounded-md"
              style={{ width: `${power}%` }}
            ></div>
          </div>

          <p className="text-lg font-medium">{gameMessage}</p>

          <div className="space-x-4">
            {!isCasting && !isReeling && (
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={handleCastStart}
              >
                Cast Line
              </button>
            )}
            {isCasting && (
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
                onClick={handleCastEnd}
              >
                Stop Casting
              </button>
            )}
            {isReeling && (
              <button
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700"
                onClick={handleReel}
              >
                Reel In
              </button>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Caught Fish</h3>
            <ul className="list-disc list-inside">
              {caughtFish.map((fish, index) => (
                <li key={index}>
                  {fish.name} - {fish.weight}kg
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}


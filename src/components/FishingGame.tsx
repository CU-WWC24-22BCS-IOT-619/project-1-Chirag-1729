import React from 'react';
import WaterScene from './WaterScene';
import GameControls from './GameControls';
import CaughtFishList from './CaughtFishList';
import { useFishingGame } from '../hooks/useFishingGame';

export default function FishingGame() {
  const {
    isCasting,
    power,
    isReeling,
    caughtFish,
    gameMessage,
    handleCastStart,
    handleCastEnd,
    handleReel,
    setIsCasting
  } = useFishingGame();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 rounded-lg p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-8">Virtual Fishing Simulator</h1>
          
          <div className="flex flex-col items-center gap-6">
            <WaterScene isCasting={isCasting} power={power} />

            <GameControls
              onCastStart={handleCastStart}
              onCastEnd={handleCastEnd}
              onCastLeave={() => setIsCasting(false)}
              onReel={handleReel}
              isReeling={isReeling}
            />

            <div className="text-lg font-medium text-center text-gray-700">
              {gameMessage}
            </div>

            <CaughtFishList caughtFish={caughtFish} />
          </div>
        </div>
      </div>
    </div>
  );
}
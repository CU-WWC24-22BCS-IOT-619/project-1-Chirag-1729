// import { useState, useEffect, useCallback } from 'react';
// import { FISH_TYPES, type FishType } from '../types/fish';

// export function useFishingGame() {
//   const [isCasting, setIsCasting] = useState(false);
//   const [power, setPower] = useState(0);
//   const [isIncreasing, setIsIncreasing] = useState(true);
//   const [caughtFish, setCaughtFish] = useState<FishType[]>([]);
//   const [gameMessage, setGameMessage] = useState('');
//   const [isReeling, setIsReeling] = useState(false);

//   const handleCastStart = () => {
//     setIsCasting(true);
//     setPower(0);
//     setIsIncreasing(true);
//   };

//   const handleCastEnd = () => {
//     setIsCasting(false);
//     castLine(power);
//   };

//   const castLine = useCallback((power: number) => {
//     setGameMessage('Line cast! Waiting for fish...');
    
//     setTimeout(() => {
//       const randomFish = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
//       const biteProbability = power / 100 * randomFish.catchProbability;
      
//       if (Math.random() < biteProbability) {
//         setGameMessage('Fish on the line! Quick - start reeling!');
//         setIsReeling(true);
//       } else {
//         setGameMessage('No bite this time. Try again!');
//       }
//     }, 2000 + Math.random() * 3000);
//   }, []);

//   const handleReel = () => {
//     if (!isReeling) return;
    
//     const catchChance = Math.random();
//     const fish = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
    
//     if (catchChance > 0.5) {
//       setCaughtFish(prev => [...prev, fish]);
//       setGameMessage(`Congratulations! You caught a ${fish.name} weighing ${fish.weight}kg!`);
//     } else {
//       setGameMessage('The fish got away! Try again.');
//     }
    
//     setIsReeling(false);
//   };

//   useEffect(() => {
//     let powerInterval: number;
    
//     if (isCasting) {
//       powerInterval = window.setInterval(() => {
//         setPower(prev => {
//           if (prev >= 100) setIsIncreasing(false);
//           if (prev <= 0) setIsIncreasing(true);
//           return isIncreasing ? prev + 2 : prev - 2;
//         });
//       }, 20);
//     }

//     return () => clearInterval(powerInterval);
//   }, [isCasting, isIncreasing]);

//   return {
//     isCasting,
//     power,
//     isReeling,
//     caughtFish,
//     gameMessage,
//     handleCastStart,
//     handleCastEnd,
//     handleReel,
//     setIsCasting
//   };
// }


import { useState, useEffect, useCallback } from 'react';
import { FISH_TYPES, type FishType } from '../types/fish';

export function useFishingGame() {
  const [isCasting, setIsCasting] = useState(false);
  const [power, setPower] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [caughtFish, setCaughtFish] = useState<FishType[]>([]);
  const [gameMessage, setGameMessage] = useState('');
  const [isReeling, setIsReeling] = useState(false);

  const handleCastStart = () => {
    setIsCasting(true);
    setPower(0);
    setIsIncreasing(true);
  };

  const handleCastEnd = () => {
    setIsCasting(false);
    castLine(power);
  };

  const castLine = useCallback((power: number) => {
    setGameMessage('Line cast! Waiting for fish...');
    
    // Reduced wait time to 0.1-0.5 seconds for faster fish bites
    setTimeout(() => {
      const randomFish = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
      
      // Adjusted probability for bite
      const biteProbability = (0.4 + power / 100) * randomFish.catchProbability;
      
      if (Math.random() < biteProbability) {
        setGameMessage('Fish on the line! Quick - start reeling!');
        setIsReeling(true);
      } else {
        setGameMessage('No bite this time. Try again!');
      }
    }, 100 + Math.random() * 400); // Bite time between 0.1 and 0.5 seconds
  }, []);

  const handleReel = () => {
    if (!isReeling) return;

    const catchChance = Math.random();
    const fish = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
    
    // Increased catch success rate for a better user experience
    if (catchChance > 0.3) {
      setCaughtFish(prev => [...prev, fish]);
      setGameMessage(`Congratulations! You caught a ${fish.name} weighing ${fish.weight}kg!`);
    } else {
      setGameMessage('The fish got away! Try again.');
    }

    setIsReeling(false);
  };

  useEffect(() => {
    let powerInterval: number;

    if (isCasting) {
      // Increased power bar speed
      powerInterval = window.setInterval(() => {
        setPower(prev => {
          if (prev >= 100) setIsIncreasing(false);
          if (prev <= 0) setIsIncreasing(true);
          return isIncreasing ? prev + 3 : prev - 3; // Faster power bar movement
        });
      }, 20);
    }

    return () => clearInterval(powerInterval);
  }, [isCasting, isIncreasing]);

  return {
    isCasting,
    power,
    isReeling,
    caughtFish,
    gameMessage,
    handleCastStart,
    handleCastEnd,
    handleReel,
    setIsCasting
  };
}

import React from 'react';
import { Fish } from 'lucide-react';
import type { FishType } from '../types/fish';

interface CaughtFishListProps {
  caughtFish: FishType[];
}

export default function CaughtFishList({ caughtFish }: CaughtFishListProps) {
  if (caughtFish.length === 0) return null;

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-bold mb-4">Caught Fish</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caughtFish.map((fish, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <Fish className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-bold">{fish.name}</h3>
              <p className="text-gray-600">{fish.weight}kg</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
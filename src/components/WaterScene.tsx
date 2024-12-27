import React from 'react';
import { Waves } from 'lucide-react';
import CastingPower from './CastingPower';

interface WaterSceneProps {
  isCasting: boolean;
  power: number;
}

export default function WaterScene({ isCasting, power }: WaterSceneProps) {
  return (
    <div className="relative w-full h-40 bg-blue-600/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Waves className="w-full h-full text-blue-500 animate-pulse" />
      </div>
      <CastingPower power={power} isVisible={isCasting} />
    </div>
  );
}
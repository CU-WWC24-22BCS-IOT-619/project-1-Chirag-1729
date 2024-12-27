// import React from 'react';

interface CastingPowerProps {
  power: number;
  isVisible: boolean;
}

export default function CastingPower({ power, isVisible }: CastingPowerProps) {
  if (!isVisible) return null;
  
  return (
    <div 
      className="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-100"
      style={{ width: `${power}%` }}
    />
  );
}
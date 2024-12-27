import React from 'react';
import { Fish, Anchor } from 'lucide-react';

interface GameControlsProps {
  onCastStart: () => void;
  onCastEnd: () => void;
  onCastLeave: () => void;
  onReel: () => void;
  isReeling: boolean;
}

export default function GameControls({
  onCastStart,
  onCastEnd,
  onCastLeave,
  onReel,
  isReeling
}: GameControlsProps) {
  return (
    <div className="flex gap-4">
      <button
        onMouseDown={onCastStart}
        onMouseUp={onCastEnd}
        onMouseLeave={onCastLeave}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <Anchor className="w-5 h-5" />
        Cast Line
      </button>

      <button
        onClick={onReel}
        disabled={!isReeling}
        className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors
          ${isReeling 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
      >
        <Fish className="w-5 h-5" />
        Reel In
      </button>
    </div>
  );
}
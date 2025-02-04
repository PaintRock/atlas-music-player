import React from 'react';
import { Shuffle, SkipBack, Play, SkipForward, Gauge } from 'lucide-react';

export default function PlayControls() {
  return (
    <div className="flex items-center justify-left gap- py-6">
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <Gauge size={20} />
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <SkipBack size={24} />
      </button>
      <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-blue-700 transition-colors">
        <Play size={24} fill="currentColor" />
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <SkipForward size={24} />
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
        <Shuffle size={20} />
      </button>
    </div>
  );
};

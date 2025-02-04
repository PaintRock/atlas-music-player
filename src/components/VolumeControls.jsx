import React from 'react';
import { Volume2 } from 'lucide-react';

export default function VolumeControls() {
    return (
        <div className="flex items-center gap-4">
            <Volume2 size={20} className="text-gray-600" />
            <input
            type="range"
            className="w-32 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
            devaultValue="50"
            />
        </div>
    );
};
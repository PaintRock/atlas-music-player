import React from 'react';
import { Volume2 } from 'lucide-react';

export default function VolumeControls() {
    return (
        <div className="flex items-center gap-4">
            <Volume2 size={30} className="text-gray-600" />
            <input
            type="range"
            className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
            defaultValue="50"
            />
        </div>
    );
};
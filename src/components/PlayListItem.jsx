import React from 'react';

export default function PlayListItem({ 
    title ="Song Title",
    artist = "Artist Name",
    duration = "3:45"
}) {
    return (
        <div className="w-64 max-w-md">
        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">{title}</span>
                <span className="text-md text-gray-600">{artist}</span>
            </div>
            <span className="text-md text-gray-600">{duration}</span>
        </div>
        </div>
    );
}
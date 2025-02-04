import React from 'react';

export default function PlayListItem({ 
    title ="Song Title",
    artist = "Artist Name",
    duration = "3:45"
}) {
    return (
        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">{title}</span>
                <span className="text-xs text-gray-600">{artist}</span>
            </div>
            <span className="text-xs text-gray-600">{duration}</span>
        </div>
    );
}
import React from "react";

export const FilterButtons: React.FC = () => {
    return (
        <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 text-sm border bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Type
            </button>
            <button className="px-4 py-2 text-sm border bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Language
            </button>
        </div>    
    )
}
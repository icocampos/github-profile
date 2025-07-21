import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <>
           <div className="flex items-center border rounded-md px-3 py-2 w-full max-w-md">
                <Search className="text-gray-500 mr-2" size={16} />
                <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search repositories..."
                className="w-full outline-none text-sm"
                />
            </div>
        </>
    );
};
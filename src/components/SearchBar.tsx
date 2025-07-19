import React from "react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search repositories..."
            className="w-full max-w-md px-4 py-2 border rounded-md outline-md outline-blue-500 mb-4"
        />
    );
};
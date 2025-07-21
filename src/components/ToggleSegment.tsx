import React from 'react';
import { RiGitRepositoryLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";

type TabOptions = 'repositories' | 'starred';

type ToggleSegmentProps = {
    selected: TabOptions;
    onSelect: (option: TabOptions) => void;
    counts: {
        repositories: number;
        starred: number;
    }
}
export const ToggleSegment: React.FC<ToggleSegmentProps> = ({ selected, onSelect, counts }) => {

    const baseClass = "flex-1 text-sm text-center font-medium p-2 border-b-2 cursor-pointer transition-all";
    const activeClass = "border-red-600 text-gray-900";
    const inactiveClass = "border-transparent text-gray-500 hover:text-gray-700";
    return (
        <div className="flex border-b border-gray-200 w-md mx-auto mb-4">
            <div
                onClick={() => onSelect('repositories')}
                className={`${baseClass} ${selected === 'repositories' ? activeClass : inactiveClass}`}
            >
                <RiGitRepositoryLine className="inline-block mr-1" />
                <span>Repositories</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                    {counts.repositories}
                </span>        
            </div>
            <div
                onClick={() => onSelect('starred')}
                className={`${baseClass} ${selected === 'starred' ? activeClass : inactiveClass}`}
            >
                <MdOutlineStarRate className="inline-block mr-1" />
                <span>Starred</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
                    {counts.starred}
                </span>
            </div>
        </div>
    )
}
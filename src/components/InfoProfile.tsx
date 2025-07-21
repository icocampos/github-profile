import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";


type InfoProfileProps = {
  avatarUrl: string;
  username: string;
  bio: string
  company?: string;
  location?: string;
  links?: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

export const InfoProfile: React.FC<InfoProfileProps> = ({
  avatarUrl,
  username,
  bio,
  company,
  location,
  links = [],
}) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-lg p-6 max-w-2xs'>
      <div className='relative'>
        <img
         src={avatarUrl}
         alt={username}
          className='w-24 h-24 rounded-full border-4 border-gray-200 shadow'     
        />
        <span className='absolute bottom-0 right-0 bg-white text-xl p-1 rounded-full'>
          😎
        </span>
      </div>
      <h1 className='text-2xl font-bold mt-4'>{username}</h1>
      <p className='text-gray-500 text-center'>{bio}</p>
      {company && (
        <div className='flex items-center text-blue-600 mt-2 text-sm'>
          <MdWork className='mr-2' />
          {company}
        </div>
      )}
      {location && (
        <div className='flex items-center text-blue-600 mt-2 text-sm'>
          <FaMapMarkerAlt className='mr-2' />
          {location}
        </div>
      )}
      <div>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center text-blue-600 hover:underline text-sm'
          >
              {link.icon && <span className='mr-2'>{link.icon}</span>}
              {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
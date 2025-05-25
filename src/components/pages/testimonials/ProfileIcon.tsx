import React from 'react';

interface ProfileIconProps {
  initial: string;
  isCenter: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ initial, isCenter }) => (
  <div className={`flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
    isCenter 
      ? 'w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-xl shadow-lg' 
      : 'w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 text-sm'
  }`}>
    {initial}
  </div>
);

export default ProfileIcon;
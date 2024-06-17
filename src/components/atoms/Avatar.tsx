import React from 'react';

interface AvatarProps {
    imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => (
    <img src={imageUrl} alt="Avatar" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
);

export default Avatar;

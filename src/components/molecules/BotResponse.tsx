import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import './BotResponse.css';

interface BotResponseProps {
    avatarUrl: string;
    responseText: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ avatarUrl, responseText }) => (
    <div className='bot-response'>
        <Text content={responseText} />
        <Avatar imageUrl={avatarUrl} />
    </div>
);

export default BotResponse;

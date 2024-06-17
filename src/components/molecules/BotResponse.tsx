import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import styles from '../../styles/BotResponse.module.css';

interface BotResponseProps {
    avatarUrl: string;
    responseText: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ avatarUrl, responseText }) => (
    <div className={styles.botResponse}>
        <Text content={responseText} />
        <Avatar imageUrl={avatarUrl} />
    </div>
);

export default BotResponse;

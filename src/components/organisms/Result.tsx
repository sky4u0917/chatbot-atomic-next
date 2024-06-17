// src/components/organisms/Result.js
import React from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';
import styles from '../../styles/Result.module.css';

interface ResultProps {
    messages: { content: string, role: string, avatar: string }[];
}

const Result: React.FC<ResultProps> = ({ messages }) => (
    <div className={styles.result}>
        {messages.map((message, index) => (
            message.role === 'user' ? (
                <UserQuestion key={index} avatarUrl={message.avatar} questionText={message.content} />
            ) : (
                <BotResponse key={index} avatarUrl={message.avatar} responseText={message.content} />
            )
        ))}
    </div>
);

export default Result;

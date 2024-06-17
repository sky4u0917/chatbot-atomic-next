import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import './UserQuestion.css';

interface UserQuestionProps {
    avatarUrl: string;
    questionText: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ avatarUrl, questionText }) => (
    <div className='user-question'>
        <Avatar imageUrl={avatarUrl} />
        <Text content={questionText} />
    </div>
);

export default UserQuestion;

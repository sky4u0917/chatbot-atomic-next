// src/components/molecules/UserAction.js
import React, { useState } from 'react';
import Title from '../atoms/Title';
import Question from '../atoms/Question';
import ResultButton from '../atoms/ResultButton';
import './UserAction.css';

interface UserActionProps {
    titleText: string;
    titleColor: string;
    buttonText: string;
    buttonTextColor: string;
    buttonBgColor: string;
    onButtonClick: (question: string) => void;
}

const UserAction: React.FC<UserActionProps> = ({ titleText, titleColor, buttonText, buttonTextColor, buttonBgColor, onButtonClick }) => {
    const [question, setQuestion] = useState('');

    const handleInputChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSendClick = () => {
        onButtonClick(question);
        setQuestion('');
    };

    return (
        <div className="user-action">
            <Title text={titleText} color={titleColor} />
            <div>
                <Question value={question} onChange={handleInputChange} />
                <ResultButton text={buttonText} textColor={buttonTextColor} bgColor={buttonBgColor} onClick={handleSendClick} />
            </div>
        </div>
    );
};

export default UserAction;

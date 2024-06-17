import React from 'react';

interface ResultButtonProps {
    text: string;
    textColor: string;
    bgColor: string;
    onClick: () => void;
}

const ResultButton: React.FC<ResultButtonProps> = ({ text, textColor, bgColor, onClick }) => (
    <button
        style={{ color: textColor, backgroundColor: bgColor, padding:'10px', borderRadius: '5px', border: 'none' }}
        onClick={onClick}
    >
        {text}
    </button>
);

export default ResultButton;

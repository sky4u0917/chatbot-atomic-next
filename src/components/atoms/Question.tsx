import React from 'react';

interface QuestionProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Ask your question..."
            style={{
                flex: 1,
                padding: '10px',
                margin: '0 10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
            }}
        />
    );
};

export default Question;

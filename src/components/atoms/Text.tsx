import React from 'react';

interface TextProps {
    content: string;
}

const Text: React.FC<TextProps> = ({ content }) => (
    <div>{content}</div>
);

export default Text;

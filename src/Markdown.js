import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownDisplay = ({ content }) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownDisplay;

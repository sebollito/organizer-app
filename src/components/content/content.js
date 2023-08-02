import React from 'react';
import AppLogo from '../logo/logo';
import TextParagraph from '../textParagraph/textParagraph';
import LearnReactLink from '../learnReactLink/learnReactLink';
import './content.css';

const Content = () => {
    return (
        <body className="App-header">
            <AppLogo />
            <TextParagraph />
            <LearnReactLink />
        </body>
    );
};

export default Content;

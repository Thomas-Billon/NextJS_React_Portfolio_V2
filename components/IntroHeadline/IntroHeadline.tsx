import React from 'react';

export interface IntroHeadlineProps {
    className?: string;
    classNameText?: string;
    classNameDetails?: string;
    display?: boolean;
}

const IntroHeadline = ({className= '', classNameText = '', classNameDetails = 'inline-block', display = true}: IntroHeadlineProps): React.ReactNode => {
    return (
        <div className={['intro-container', className].join(' ')} {...(display ? {} : {"data-nosnippet": true})}>
            <div className={['text-headline', classNameText].join(' ')}>
                Hi, I'm <span className={classNameDetails} data-text="Thomas">Thomas</span>
            </div>
            <div className={["text-subline", display ? '' : 'opacity-0'].join(' ')}>
                A full-stack developer with a passion for challenges and problem solving<br/>
                I also create video games during my spare time
            </div>
        </div>
    );
}

export default IntroHeadline;
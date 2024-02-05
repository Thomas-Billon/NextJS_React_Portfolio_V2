import React from 'react';

import './GlitchText.scss';


export interface GlitchTextProps {
    isEnabled?: boolean
}

const GlitchText = ({ children, isEnabled = true }: { children: string } & GlitchTextProps): React.ReactNode => (
    <span className={isEnabled ? 'glitch-text' : 'inline-block'} data-text={children}>
        {children}
    </span>
);

export default GlitchText;

import React from 'react';

import './DynamicTag.scss';


export interface DynamicTagProps {
    tag?: keyof React.JSX.IntrinsicElements;
}

const DynamicTag = ({ children, className, dataNoSnippet, tag = 'div' }: { children: React.ReactNode, className: string, dataNoSnippet: boolean} & DynamicTagProps): React.ReactNode => {
    const Tag = tag as React.ElementType;
    return (
        <Tag className={className} { ...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
            {children}
        </Tag>
    );
};

export default DynamicTag;
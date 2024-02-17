import React from 'react';

import './DynamicTag.scss';


export interface DynamicTagProps {
    tag: keyof React.JSX.IntrinsicElements;
}

const DynamicTag = ({ children, tag = 'div' }: { children: React.ReactNode } & DynamicTagProps): React.ReactNode => {
    const Tag = tag as React.ElementType;
    return (
        <Tag className='hidden'>
            {children}
        </Tag>
    );
};

export default DynamicTag;
// use server

import React, { ElementType, ReactNode, JSX } from 'react';
import { Props } from '@/utils/react/Props';


export interface DynamicTagProps {
    tag?: keyof JSX.IntrinsicElements;
    dataNoSnippet?: boolean;
}

const DynamicTag = ({ children, className = '', tag = 'div', dataNoSnippet = false }: Props<DynamicTagProps>): ReactNode => {
    const Tag = tag as ElementType;
    return (
        <Tag className={className} {...(dataNoSnippet ? { 'data-nosnippet': true } : {})}>
            {children}
        </Tag>
    );
};

export default DynamicTag;

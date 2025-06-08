'use client';

import React from 'react';
import { Props } from '@/utils/react/Props';
import SkillGridCell from '@/components/skills/grid/SkillGridCell';
import SkillStackFrame from '@/components/skills/stack/SkillStackFrame';
import { LayoutContext } from '@/components/skills/layout/SkillLayout';
import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { SkillLayoutDisplayEnum } from '@/utils/enums/SkillLayoutDisplayEnum';


const SkilLayoutItem = ({ children, props = {}}: Props<SkillCardProps>): React.ReactNode => {
    const layoutContext = useCustomContext(LayoutContext);

    return (
        layoutContext.layoutDisplay === SkillLayoutDisplayEnum.Grid ?
            <SkillGridCell>
                {children}
            </SkillGridCell>
        : layoutContext.layoutDisplay === SkillLayoutDisplayEnum.Stack ?
            <SkillStackFrame {...{ props }}>
                {children}
            </SkillStackFrame>
        : <></>
    );
};

export default SkilLayoutItem;

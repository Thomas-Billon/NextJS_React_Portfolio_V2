'use client';

import React from 'react';
import { Props } from '@/utils/react/Props';
import SkillGridCell from '@/components/skills/grid/SkillGridCell';
import SkillStackFrame from '@/components/skills/stack/SkillStackFrame';
import { CollectionContext } from '@/components/skills/collection/SkillCollection';
import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { SkillCollectionDisplayEnum } from '@/utils/enums/SkillCollectionDisplayEnum';


const SkilCollectionItem = ({ children, props = {}}: Props<SkillCardProps>): React.ReactNode => {
    const collectionContext = useCustomContext(CollectionContext);

    return (
        collectionContext.collectionDisplay === SkillCollectionDisplayEnum.Grid ?
            <SkillGridCell>
                {children}
            </SkillGridCell>
        : collectionContext.collectionDisplay === SkillCollectionDisplayEnum.Stack ?
            <SkillStackFrame {...{ props }}>
                {children}
            </SkillStackFrame>
        : <></>
    );
};

export default SkilCollectionItem;

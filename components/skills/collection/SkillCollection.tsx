'use client';

import React, { createContext, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillGrid from '@/components/skills/grid/SkillGrid';
import SkillStack from '@/components/skills/stack/SkillStack';
import SkillCollectionButton from '@/components/skills/collection/SkillCollectionButton';
import { Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { SkillCollectionDisplayEnum } from '@/utils/enums/SkillCollectionDisplayEnum';


export const CollectionContext = createContext({
    collectionDisplay: SkillCollectionDisplayEnum.Stack,
    toggleCollectionDisplay: (): void => {}
});

export interface SkillCollectionProps {
    skills?: SkillEnum[];
};

const SkillCollection = ({ children, skills = [] }: Props<SkillCollectionProps>): React.ReactNode => {
    const [collectionDisplay, setCollectionDisplay] = useState<SkillCollectionDisplayEnum>(SkillCollectionDisplayEnum.Stack);

    const toggleCollectionDisplay = (): void => {
        if (collectionDisplay === SkillCollectionDisplayEnum.Grid) {
            setCollectionDisplay(SkillCollectionDisplayEnum.Stack);
        }
        else if (collectionDisplay === SkillCollectionDisplayEnum.Stack) {
            setCollectionDisplay(SkillCollectionDisplayEnum.Grid);
        }
    };

    return (
        <CollectionContext.Provider value={{ collectionDisplay, toggleCollectionDisplay }}>
            <div className={SkillCollectionStyle}>
                {
                    collectionDisplay === SkillCollectionDisplayEnum.Grid ?
                        <SkillGrid>
                            {children}
                        </SkillGrid>
                    : collectionDisplay === SkillCollectionDisplayEnum.Stack ?
                        <SkillStack {...{ props: { skills }}}>
                            {children}
                        </SkillStack>
                    : <></>
                }
                <div className={SkillCollectionSwitchDisplayStyle}>
                    <SkillCollectionButton />
                </div>
            </div>
        </CollectionContext.Provider>
    );
};

export default SkillCollection;


const SkillCollectionStyle = tw([
    'SkillCollectionStyle',
    'container-section'
]);

const SkillCollectionSwitchDisplayStyle = tw([
    'SkillCollectionSwitchDisplayStyle',
    'flex',
    'justify-center',
    'pt-6',
    '-mb-4'
]);

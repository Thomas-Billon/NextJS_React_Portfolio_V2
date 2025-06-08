'use client';

import React, { createContext, useState } from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import SkillGrid from '@/components/skills/grid/SkillGrid';
import SkillStack from '@/components/skills/stack/SkillStack';
import SkillLayoutSwitchButton from '@/components/skills/layout/SkillLayoutSwitchButton';
import { Props } from '@/utils/react/Props';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { SkillLayoutDisplayEnum } from '@/utils/enums/SkillLayoutDisplayEnum';


export const LayoutContext = createContext({
    layoutDisplay: SkillLayoutDisplayEnum.Stack,
    toggleLayoutDisplay: (): void => {}
});

export interface SkillLayoutProps {
    skills?: SkillEnum[];
};

const SkillLayout = ({ children, skills = [] }: Props<SkillLayoutProps>): React.ReactNode => {
    const [layoutDisplay, setLayoutDisplay] = useState<SkillLayoutDisplayEnum>(SkillLayoutDisplayEnum.Stack);

    const toggleLayoutDisplay = (): void => {
        if (layoutDisplay === SkillLayoutDisplayEnum.Grid) {
            setLayoutDisplay(SkillLayoutDisplayEnum.Stack);
        }
        else if (layoutDisplay === SkillLayoutDisplayEnum.Stack) {
            setLayoutDisplay(SkillLayoutDisplayEnum.Grid);
        }
    };

    return (
        <LayoutContext.Provider value={{ layoutDisplay: layoutDisplay, toggleLayoutDisplay: toggleLayoutDisplay }}>
            <div id="skill-layout" className={styles.SkillLayoutStyle}>
                {
                    layoutDisplay === SkillLayoutDisplayEnum.Grid ?
                        <SkillGrid>
                            {children}
                        </SkillGrid>
                    : layoutDisplay === SkillLayoutDisplayEnum.Stack ?
                        <SkillStack {...{ props: { skills }}}>
                            {children}
                        </SkillStack>
                    : <></>
                }
                <div className={styles.SkillLayoutSwitchContainerStyle}>
                    <SkillLayoutSwitchButton />
                </div>
            </div>
        </LayoutContext.Provider>
    );
};

export default SkillLayout;


const styles = tw({
    SkillLayoutStyle: [
        'container-section'
    ],

    SkillLayoutSwitchContainerStyle: [
        'flex',
        'justify-center',
        'pt-6',
        '-mb-4'
    ]
});

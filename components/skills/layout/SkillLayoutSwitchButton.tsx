'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { LayoutContext } from '@/components/skills/layout/SkillLayout';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { SkillLayoutButtonEnum } from '@/utils/enums/SkillLayoutButtonEnum';
import { SkillLayoutDisplayEnum } from '@/utils/enums/SkillLayoutDisplayEnum';


const SkillLayoutSwitchButton = (): React.ReactNode => {
    const layoutContext = useCustomContext(LayoutContext);
    
    const click = (): void => {
        layoutContext.toggleLayoutDisplay();
    };

    return (
        <button className={styles.SkillLayoutButtonStyle({ buttonType: SkillLayoutButtonEnum.SwitchDisplay })} onClick={click}>
            <FontAwesomeIcon
                icon={
                    layoutContext.layoutDisplay === SkillLayoutDisplayEnum.Grid ? fas.faStop
                    : layoutContext.layoutDisplay === SkillLayoutDisplayEnum.Stack ? fas.faGrip
                    : fas.faQuestion
                }
                className={styles.SkillLayoutButtonIconStyle}
                size="xl"
                fixedWidth
            />
        </button>
    );
};

export default SkillLayoutSwitchButton;


export const styles = tw({
    SkillLayoutButtonStyle: ({ buttonType }: {
        buttonType: SkillLayoutButtonEnum
    }) => [
        'w-14',
        'h-14',
        'bg-off-white',
        'rounded-full',
        'shadow-md',
        'scale-90',
        'transition',
        'duration-300',
        'hover:text-white',
        'hover:scale-100',
        'active:text-white',
        'active:scale-100',
        buttonType === SkillLayoutButtonEnum.SwitchDisplay && 'text-orange-light-500',
        buttonType === SkillLayoutButtonEnum.SwitchDisplay && 'hover:bg-orange-light-500',
        buttonType === SkillLayoutButtonEnum.SwitchDisplay && 'active:bg-orange-light-500',
        buttonType === SkillLayoutButtonEnum.SwipeLeft && 'pb-0.5',
        buttonType === SkillLayoutButtonEnum.SwipeLeft && 'text-purple-500',
        buttonType === SkillLayoutButtonEnum.SwipeLeft && 'hover:bg-purple-500',
        buttonType === SkillLayoutButtonEnum.SwipeLeft && 'active:bg-purple-500',
        buttonType === SkillLayoutButtonEnum.SwipeRight && 'pt-0.5',
        buttonType === SkillLayoutButtonEnum.SwipeRight && 'text-red-500',
        buttonType === SkillLayoutButtonEnum.SwipeRight && 'hover:bg-red-500',
        buttonType === SkillLayoutButtonEnum.SwipeRight && 'active:bg-red-500'
    ],

    SkillLayoutButtonIconStyle: [
        'text-3xl'
    ]
});

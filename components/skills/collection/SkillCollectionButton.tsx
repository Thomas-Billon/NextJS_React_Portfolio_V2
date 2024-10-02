'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { CollectionContext } from '@/components/skills/collection/SkillCollection';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { SkillCollectionButtonEnum } from '@/utils/enums/SkillCollectionButtonEnum';
import { SkillCollectionDisplayEnum } from '@/utils/enums/SkillCollectionDisplayEnum';


const SkillCollectionButton = (): React.ReactNode => {
    const collectionContext = useCustomContext(CollectionContext);
    
    const click = (): void => {
        collectionContext.toggleCollectionDisplay();
    };

    return (
        <button className={SkillCollectionButtonStyle({ buttonType: SkillCollectionButtonEnum.SwitchDisplay })} onClick={click}>
            <FontAwesomeIcon
                icon={
                    collectionContext.collectionDisplay === SkillCollectionDisplayEnum.Grid ? fas.faStop
                    : collectionContext.collectionDisplay === SkillCollectionDisplayEnum.Stack ? fas.faGrip
                    : fas.faQuestion
                }
                className={SkillCollectionButtonIconStyle}
                size="xl"
                fixedWidth
            />
        </button>
    );
};

export default SkillCollectionButton;


export const SkillCollectionButtonStyle = ({ buttonType }: { buttonType: SkillCollectionButtonEnum }) => tw([
    'SkillCollectionButtonStyle',
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
    buttonType === SkillCollectionButtonEnum.SwitchDisplay && 'text-orange-light-500',
    buttonType === SkillCollectionButtonEnum.SwitchDisplay && 'hover:bg-orange-light-500',
    buttonType === SkillCollectionButtonEnum.SwitchDisplay && 'active:bg-orange-light-500',
    buttonType === SkillCollectionButtonEnum.SwipeLeft && 'pb-0.5',
    buttonType === SkillCollectionButtonEnum.SwipeLeft && 'text-purple-500',
    buttonType === SkillCollectionButtonEnum.SwipeLeft && 'hover:bg-purple-500',
    buttonType === SkillCollectionButtonEnum.SwipeLeft && 'active:bg-purple-500',
    buttonType === SkillCollectionButtonEnum.SwipeRight && 'pt-0.5',
    buttonType === SkillCollectionButtonEnum.SwipeRight && 'text-red-500',
    buttonType === SkillCollectionButtonEnum.SwipeRight && 'hover:bg-red-500',
    buttonType === SkillCollectionButtonEnum.SwipeRight && 'active:bg-red-500'
]);

export const SkillCollectionButtonIconStyle = tw([
    'SkillCollectionButtonIconStyle',
    'text-3xl'
]);

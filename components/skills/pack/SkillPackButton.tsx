'use client';

import React from 'react';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { PackContext } from '@/components/skills/pack/SkillPack';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';


export interface SkillPackButtonProps {
    direction?: number;
}

const SkillPackButton = ({ props = {}}: Props<SkillPackButtonProps>): React.ReactNode => {
    const packContext = useCustomContext(PackContext, 'SkillPack');
    
    const click = (event: React.MouseEvent<HTMLElement>): void => {
        if (props.direction) {
            if (props.direction < 0) {
                packContext.swipeCard?.current?.swipeLeft();
            }
            else {
                packContext.swipeCard?.current?.swipeRight();
            }
        }
    };

    return (
        props.direction &&
        <button className={SkillPackButtonStyle({ direction: props.direction })} onClick={click}> {
            <FontAwesomeIcon icon={props.direction < 0 ? fas.faClose : far.faHeart} className={SkillPackButtonIconStyle} size="xl" fixedWidth />
        } </button>
    );
};

export default SkillPackButton;


const SkillPackButtonStyle = ({ direction }: { direction: number }) => tw([
    'SkillPackButtonStyle',
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
    direction < 0 && 'text-purple-500',
    direction > 0 && 'text-red-500',
    direction < 0 && 'hover:bg-purple-500',
    direction > 0 && 'hover:bg-red-500'
]);

const SkillPackButtonIconStyle = tw([
    'SkillPackButtonIconStyle',
    'text-3xl'
]);

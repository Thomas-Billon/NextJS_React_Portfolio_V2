'use client';

import React from 'react';
import { Props } from '@/utils/react/Props';
import { StackContext } from '@/components/skills/stack/SkillStack';
import { SkillCollectionButtonIconStyle, SkillCollectionButtonStyle } from '@/components/skills/collection/SkillCollectionButton';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { SkillCollectionButtonEnum } from '@/utils/enums/SkillCollectionButtonEnum';


export interface SkillStackButtonProps {
    buttonType?: SkillCollectionButtonEnum;
}

const SkillStackButton = ({ props = {}}: Props<SkillStackButtonProps>): React.ReactNode => {
    const stackContext = useCustomContext(StackContext);

    const click = (): void => {
        if (props.buttonType === SkillCollectionButtonEnum.SwipeLeft) {
            stackContext.swipeCard?.current?.swipeLeft();
        }
        else if (props.buttonType === SkillCollectionButtonEnum.SwipeRight) {
            stackContext.swipeCard?.current?.swipeRight();
        }
    };

    return (
        props.buttonType !== undefined &&
        <button className={SkillCollectionButtonStyle({ buttonType: props.buttonType })} onClick={click}>
            <FontAwesomeIcon
                icon={
                    props.buttonType === SkillCollectionButtonEnum.SwipeLeft ? far.faThumbsUp
                    : props.buttonType === SkillCollectionButtonEnum.SwipeRight ? far.faHeart
                    : fas.faQuestion
                }
                className={SkillCollectionButtonIconStyle}
                size="xl"
                fixedWidth
            />
        </button>
    );
};

export default SkillStackButton;

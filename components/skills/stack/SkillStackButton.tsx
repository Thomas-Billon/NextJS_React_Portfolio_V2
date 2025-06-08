'use client';

import React from 'react';
import { Props } from '@/utils/react/Props';
import { StackContext } from '@/components/skills/stack/SkillStack';
import { styles as skillLayoutStyles } from '@/components/skills/layout/SkillLayoutSwitchButton';
import { useCustomContext } from '@/hooks/UseCustomContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { SkillLayoutButtonEnum } from '@/utils/enums/SkillLayoutButtonEnum';


export interface SkillStackButtonProps {
    buttonType?: SkillLayoutButtonEnum;
}

const SkillStackButton = ({ props = {}}: Props<SkillStackButtonProps>): React.ReactNode => {
    const stackContext = useCustomContext(StackContext);

    const click = (): void => {
        if (props.buttonType === SkillLayoutButtonEnum.SwipeLeft) {
            stackContext.swipeCard?.current?.swipeLeft();
        }
        else if (props.buttonType === SkillLayoutButtonEnum.SwipeRight) {
            stackContext.swipeCard?.current?.swipeRight();
        }
    };

    return (
        props.buttonType !== undefined &&
        <button className={skillLayoutStyles.SkillLayoutButtonStyle({ buttonType: props.buttonType })} onClick={click}>
            <FontAwesomeIcon
                icon={
                    props.buttonType === SkillLayoutButtonEnum.SwipeLeft ? far.faThumbsUp
                    : props.buttonType === SkillLayoutButtonEnum.SwipeRight ? far.faHeart
                    : fas.faQuestion
                }
                className={skillLayoutStyles.SkillLayoutButtonIconStyle}
                size="xl"
                fixedWidth
            />
        </button>
    );
};

export default SkillStackButton;

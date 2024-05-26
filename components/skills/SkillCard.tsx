// use server

import React from 'react';
import Image from 'next/image';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { snakeCase } from '@/utils/global/StringExtension';


export interface SkillCardProps {
    skill?: SkillEnum;
    backgroundColor?: string;
    textColor?: string;
    imageRatio?: number;
}

const SkillCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {
    
    const getImageNameFromSkill = (skill: SkillEnum): string => {
        const enumKey = Object.keys(SkillEnum)[Object.values(SkillEnum).indexOf(skill)];
        return snakeCase(enumKey);
    };

    const getFontSizeFromSkill = (skill: SkillEnum): number => {
        const maxFontSize = 24;
        const maxLength = 16;

        let length = skill.length;
        if (length > maxLength) {
            length = maxLength;
        }

        // f(x) = -2x + x²/min + max
        // f(0) = 24    -> If text length is small, font size will be set to max i.e. 24px
        // f(16) = 8   -> If text length is big, font size will be set to min i.e. 8px
        return -2 * length + (length * length) / maxLength + maxFontSize;
    };

    return (
        <li
            className={SkillCardStyle({ imageRatio: props.imageRatio })}
            style={{color: props.textColor, borderColor: props.backgroundColor, backgroundColor: props.backgroundColor}}
        >
            <div className={SkillCardDoubleWidthStyle}> {
                props.skill &&
                <>
                    <Image
                        className={SkillCardImageStyle({ imageRatio: props.imageRatio })}
                        src={`/static/images/skills/${getImageNameFromSkill(props.skill)}.png`}
                        alt={props.skill}
                        width={
                            props.imageRatio == 2 ? "512" :
                            props.imageRatio == 1 ? "256" :
                            "256"
                        }
                        height="256"
                    />
                    <div className={SkillCardTextStyle({ imageRatio: props.imageRatio })}>
                        <span className={SkillCardTitleStyle} style={{ fontSize: getFontSizeFromSkill(props.skill) }}>
                            {props.skill}
                        </span>
                    </div>
                </>
            }
            </div>
        </li>
    );
};

export default SkillCard;


const SkillCardStyle = ({ imageRatio }: { imageRatio?: number }) =>  tw([
    'SkillCardStyle',
    'relative',
    'w-20',
    'h-20',
    'text-white',
    'overflow-hidden',
    'border-2',
    'border-off-white',
    'rounded-lg',
    imageRatio == 1 && 'after:content-[""]',
    imageRatio == 1 && 'after:absolute',
    imageRatio == 1 && 'after:z-1',
    imageRatio == 1 && 'after:top-0',
    imageRatio == 1 && 'after:left-0',
    imageRatio == 1 && 'after:full',
    imageRatio == 1 && 'after:bg-white',
    imageRatio == 1 && 'after:transition-colors',
    imageRatio == 1 && 'after:duration-300',
    imageRatio == 1 && 'after:hover:bg-transparent'
]);

const SkillCardDoubleWidthStyle = tw([
    'SkillCardDoubleWidthStyle',
    'relative',
    'z-2',
    'flex',
    'w-[200%]',
    'transition-transform',
    'duration-300',
    'hover:-translate-x-1/2'
]);

const SkillCardImageStyle = ({ imageRatio }: { imageRatio?: number }) => tw([
    'SkillCardImageStyle',
    imageRatio == 1 && 'w-1/2',
    imageRatio == 2 && 'w-full'
]);

const SkillCardTextStyle = ({ imageRatio }: { imageRatio?: number }) => tw([
    'SkillCardTextStyle',
    'w-1/2',
    'p-2',
    'flex',
    'items-center',
    'justify-center',
    'text-center',
    'font-bold',
    'overflow-hidden',
    imageRatio == 2 && 'absolute',
    imageRatio == 2 && 'right-0',
    imageRatio == 2 && 'h-full'
]);

const SkillCardTitleStyle = tw([
    'SkillCardTitleStyle',
    'inline-flex',
    'justify-center'
]);
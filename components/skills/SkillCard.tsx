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
        let length = 0;

        // Get length of longest word in skill
        const words = skill.split(' ');
        words.forEach(word => {
            if (length < word.length) {
                length = word.length;
            }
        });

        const shiftFunctionValue = 8;
        if (length <= shiftFunctionValue) {
            // Parabolic function : f(x) = -4x + x²/4 + 26
            // f(0) = 26    -> If text length is small, font size will be set to max i.e. 26px
            // f(8) = 10    -> If text length is big, font size will be set to min i.e. 8px
            return -4 * length + (length * length) / 4 + 26;
        }
        else {
            // Linear function : f(x) = -x/2 + 14
            // f(8) = 10    -> If text length is small, font size will be set to max i.e. 10px
            // f(28) = 0    -> If text length is big, font size will be set to min i.e. 0px
            return -length / 2 + 14;
        }
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
    'w-16',
    'h-16',
    'text-white',
    'overflow-hidden',
    'border-2',
    'border-off-white',
    'rounded-lg',
    'transition-transform',
    'duration-300',
    'hover:scale-125',
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
    'cursor-default',
    'select-none',
    imageRatio == 2 && 'absolute',
    imageRatio == 2 && 'right-0',
    imageRatio == 2 && 'h-full'
]);

const SkillCardTitleStyle = tw([
    'SkillCardTitleStyle'
]);
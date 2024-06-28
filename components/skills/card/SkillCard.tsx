// use server

import React from 'react';
import Image from 'next/image';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import '@/utils/global/StringExtension';
import '@/utils/react/ReactExtension';


export interface SkillCardProps {
    skill?: SkillEnum;
    proficiency?: number;
    backgroundColor?: string;
    textColor?: string;
    imageRatio?: number;
}

const SkillCard = ({ props = {} }: Props<SkillCardProps>): React.ReactNode => {

    props.imageRatio = props.imageRatio ?? 1;
    
    const getImageNameFromSkill = (skill: SkillEnum): string => {
        const enumKey = Object.keys(SkillEnum)[Object.values(SkillEnum).indexOf(skill)];
        return String.snakeCase(enumKey);
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

        const minSize = 24;
        const maxSize = 48;

        // Linear function : f(x) = -2.4x + 48
        // f(0) = 48    -> If text length is small, font size will be set to max i.e. 48px
        // f(10) = 24   -> If text length is big, font size will be set to min i.e. 24px
        const size = -2.4 * length + maxSize;

        return size < minSize ? minSize : size;
    };

    return (
        <div
            className={SkillCardStyle({ imageRatio: props.imageRatio })}
            style={{
                color: props.textColor,
                borderColor: props.backgroundColor,
                backgroundColor: props.backgroundColor,
                '--tw-shadow-color': props.backgroundColor
            }}
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
                        draggable={false}
                    />
                    <div className={SkillCardTextStyle({ imageRatio: props.imageRatio })}>
                        <span className={SkillCardTitleStyle} style={{ fontSize: getFontSizeFromSkill(props.skill) }}>
                            {props.skill}
                        </span>
                    </div>
                </>
            }
            </div>
        </div>
    );
};

export default SkillCard;


const SkillCardStyle = ({ imageRatio }: { imageRatio?: number }) => tw([
    'SkillCardStyle',
    'relative',
    'w-48',
    'h-48',
    'text-white',
    'overflow-hidden',
    'border-4',
    'border-off-white',
    'rounded-lg',
    'transition-transform',
    'duration-300',
    'hover:scale-110',
    'after:content-[""]',
    'after:absolute',
    'after:z-2',
    'after:top-0',
    'after:left-0',
    'after:full',
    'after:opacity-30',
    'after:transition-shadow',
    'after:duration-300',
    'after:shadow-[inset_0_0_30px_15px_rgba(0,0,0,0)]',
    'after:shadow-inherit',
    'after:hover:shadow-transparent',
    imageRatio == 1 && 'before:content-[""]',
    imageRatio == 1 && 'before:absolute',
    imageRatio == 1 && 'before:z-1',
    imageRatio == 1 && 'before:top-0',
    imageRatio == 1 && 'before:left-0',
    imageRatio == 1 && 'before:full',
    imageRatio == 1 && 'before:transition-color',
    imageRatio == 1 && 'before:duration-300',
    imageRatio == 1 && 'before:bg-off-white',
    imageRatio == 1 && 'before:hover:bg-transparent'
]);

const SkillCardDoubleWidthStyle = tw([
    'SkillCardDoubleWidthStyle',
    'relative',
    'z-3',
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
    'select-none',
    imageRatio == 2 && 'absolute',
    imageRatio == 2 && 'right-0',
    imageRatio == 2 && 'h-full'
]);

const SkillCardTitleStyle = tw([
    'SkillCardTitleStyle'
]);
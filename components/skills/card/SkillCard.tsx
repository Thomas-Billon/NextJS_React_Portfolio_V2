// use server

import React from 'react';
import Image from 'next/image';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { tw } from '@/utils/tailwind/TinyWind';
import { Props } from '@/utils/react/Props';
import { ProficiencyLevelEnum } from '@/utils/enums/ProficiencyLevelEnum';
import '@/utils/global/StringExtension';
import '@/utils/react/ReactExtension';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


export interface SkillCardProps {
    skill?: SkillEnum;
    proficiency?: number;
    backgroundColor?: string;
    textColor?: string;
    imageRatio?: number;
}

const SkillCard = ({ props = {}}: Props<SkillCardProps>): React.ReactNode => {

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
        props.skill &&
        <div className={SkillCardStyle}>
            <div className={SkillCardDoubleWidthStyle} style={{ color: props.textColor, backgroundColor: props.backgroundColor }}>
                <Image
                    className={SkillCardImageStyle({ imageRatio: props.imageRatio })}
                    src={`/static/images/skills/${getImageNameFromSkill(props.skill)}.jpg`}
                    alt={props.skill}
                    width={
                        props.imageRatio == 2 ? '512' :
                        props.imageRatio == 1 ? '256' :
                        '256'
                    }
                    height="256"
                    draggable={false}
                />
                <div className={SkillCardTextStyle({ imageRatio: props.imageRatio })}>
                    <h4 className={SkillCardTitleStyle} style={{ fontSize: getFontSizeFromSkill(props.skill) }}>
                        {props.skill}
                    </h4>
                    <div className={SkillCardProficiencyStyle}>
                        <div> {
                            [...Array(5).keys()].map((proficiency, index) =>
                                <span key={index}>
                                    <FontAwesomeIcon icon={proficiency + 1 <= (props.proficiency ?? ProficiencyLevelEnum.Novice) ? fas.faStar : far.faStar} size="lg" fixedWidth />
                                </span>
                            )
                        } </div>
                        <span>
                            {ProficiencyLevelEnum[props.proficiency ?? ProficiencyLevelEnum.Novice]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;


const SkillCardStyle = tw([
    'SkillCardStyle',
    'relative',
    'w-48',
    'h-48',
    'text-white',
    'overflow-hidden',
    'rounded-lg',
    'group',
    'transition-transform',
    'duration-300',
    'hover:scale-110',
    'active:scale-110'
]);

const SkillCardDoubleWidthStyle = tw([
    'SkillCardDoubleWidthStyle',
    'absolute',
    'z-3',
    'flex',
    'w-[200%]',
    'h-full',
    'transition-transform',
    'duration-300',
    'group-hover:-translate-x-1/2',
    'group-active:-translate-x-1/2'
]);

const SkillCardImageStyle = ({ imageRatio }: { imageRatio?: number }) => tw([
    'SkillCardImageStyle',
    'transition-opacity',
    'duration-300',
    'group-hover:opacity-0',
    'group-active:opacity-0',
    imageRatio == 1 && 'w-1/2',
    imageRatio == 2 && 'w-full'
]);

const SkillCardTextStyle = ({ imageRatio }: { imageRatio?: number }) => tw([
    'SkillCardTextStyle',
    'w-1/2',
    'p-2',
    'pt-4',
    'flex',
    'flex-col',
    'gap-2',
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
    'SkillCardTitleStyle',
    'leading-none'
]);

const SkillCardProficiencyStyle = tw([
    'SkillCardProficiencyStyle'
]);

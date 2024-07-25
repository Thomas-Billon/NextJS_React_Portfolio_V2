import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { SkillEnum } from '@/utils/enums/SkillEnum';

import Variables from '@/styles/scss/variables.module.scss';


export interface SkillsProps {
    cardProps: SkillCardProps[];
};

const cardProps: SkillCardProps[] = [
    {
        skill: SkillEnum.Html5,
        proficiency: 5,
        backgroundColor: '#F06529'
    },
    {
        skill: SkillEnum.Css3,
        proficiency: 5,
        backgroundColor: '#2965F1'
    },
    {
        skill: SkillEnum.CSharp,
        proficiency: 5,
        backgroundColor: '#390091'
    },
    {
        skill: SkillEnum.Javascript,
        proficiency: 4,
        backgroundColor: '#F0DB4F',
        textColor: '#323330'
    },
    {
        skill: SkillEnum.Typescript,
        proficiency: 4,
        backgroundColor: '#007ACC'
    },
    {
        skill: SkillEnum.Php,
        proficiency: 4,
        backgroundColor: '#777BB3'
    },
    {
        skill: SkillEnum.CPlusPlus,
        proficiency: 2,
        backgroundColor: '#1D2D97'
    },
    {
        skill: SkillEnum.C,
        proficiency: 2,
        backgroundColor: '#00599C'
    },
    {
        skill: SkillEnum.ShellScript,
        proficiency: 1,
        backgroundColor: '#293137'
    },
    {
        skill: SkillEnum.Scss,
        proficiency: 5,
        backgroundColor: '#CC6699'
    },
    {
        skill: SkillEnum.Bootstrap,
        proficiency: 5,
        backgroundColor: '#7B12F8'
    },
    {
        skill: SkillEnum.Tailwind,
        proficiency: 4,
        backgroundColor: '#38BDF8'
    },
    {
        skill: SkillEnum.JQuery,
        proficiency: 4,
        backgroundColor: '#333333'
    },
    {
        skill: SkillEnum.DotNet,
        proficiency: 4,
        backgroundColor: '#512BD4'
    },
    {
        skill: SkillEnum.React,
        proficiency: 3,
        backgroundColor: '#61DAFB'
    },
    {
        skill: SkillEnum.Angular,
        proficiency: 3,
        backgroundColor: '#E90464'
    },
    {
        skill: SkillEnum.Vue,
        proficiency: 2,
        backgroundColor: '#41B883'
    },
    {
        skill: SkillEnum.ThreeJs,
        proficiency: 2,
        backgroundColor: '#000000'
    },
    {
        skill: SkillEnum.NextJs,
        proficiency: 2,
        backgroundColor: '#000000'
    },
    {
        skill: SkillEnum.ExpressJs,
        proficiency: 1,
        backgroundColor: '#000000'
    },
    {
        skill: SkillEnum.SocketIo,
        proficiency: 1,
        backgroundColor: '#000000'
    },
    {
        skill: SkillEnum.Unity,
        proficiency: 5,
        backgroundColor: '#141414'
    },
    {
        skill: SkillEnum.MySql,
        proficiency: 4,
        backgroundColor: '#E48D1A'
    },
    {
        skill: SkillEnum.PostgreSql,
        proficiency: 4,
        backgroundColor: '#336791'
    },
    {
        skill: SkillEnum.Aws,
        proficiency: 4,
        backgroundColor: '#FF9900'
    },
    {
        skill: SkillEnum.Apache,
        proficiency: 3,
        backgroundColor: '#272660'
    },
    {
        skill: SkillEnum.Azure,
        proficiency: 2,
        backgroundColor: '#003E6C'
    },
    {
        skill: SkillEnum.CosmosDb,
        proficiency: 2,
        backgroundColor: '#272660'
    },
    {
        skill: SkillEnum.Photoshop,
        proficiency: 4,
        backgroundColor: '#31A8FF'
    },
    {
        skill: SkillEnum.Illustrator,
        proficiency: 4,
        backgroundColor: '#FF9A00'
    },
    {
        skill: SkillEnum.Git,
        proficiency: 4,
        backgroundColor: '#F03C2E'
    },
    {
        skill: SkillEnum.NodeJs,
        proficiency: 2,
        backgroundColor: '#5FA04E'
    },
    {
        skill: SkillEnum.French,
        proficiency: 5,
        backgroundColor: '#CE1126',
        imageRatio: 2
    },
    {
        skill: SkillEnum.English,
        proficiency: 5,
        backgroundColor: '#012169',
        imageRatio: 2
    },
    {
        skill: SkillEnum.Spanish,
        proficiency: 2,
        backgroundColor: '#C60B1E',
        textColor: '#FFC400',
        imageRatio: 2
    },
    {
        skill: SkillEnum.Japanese,
        proficiency: 1,
        backgroundColor: '#FFFFFF',
        textColor: '#BC002D',
        imageRatio: 2
    }
];

export const skillsProps: SkillsProps = {
    cardProps: cardProps
};

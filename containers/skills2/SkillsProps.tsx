import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface SkillsProps {
    cardProps: SkillCardProps[];
};

const cardProps: SkillCardProps[] = [
    {
        skill: SkillEnum.Html5,
        proficiency: 5,
        backgroundColor: '#F16529'
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
        textColor: '#313131'
    },
    {
        skill: SkillEnum.Typescript,
        proficiency: 4,
        backgroundColor: '#007ACC'
    },
    {
        skill: SkillEnum.Php,
        proficiency: 4,
        backgroundColor: '#6082BB'
    },
    {
        skill: SkillEnum.CPlusPlus,
        proficiency: 2,
        backgroundColor: '#2E40A5'
    },
    {
        skill: SkillEnum.C,
        proficiency: 2,
        backgroundColor: '#00599C'
    },
    {
        skill: SkillEnum.ShellScript,
        proficiency: 1,
        backgroundColor: '#2A3538'
    },
    {
        skill: SkillEnum.Scss,
        proficiency: 5,
        backgroundColor: '#CD679B'
    },
    {
        skill: SkillEnum.Bootstrap,
        proficiency: 5,
        backgroundColor: '#8312F9'
    },
    {
        skill: SkillEnum.Tailwind,
        proficiency: 4,
        backgroundColor: '#39BCF9'
    },
    {
        skill: SkillEnum.JQuery,
        proficiency: 4,
        backgroundColor: '#1465AC'
    },
    {
        skill: SkillEnum.DotNet,
        proficiency: 4,
        backgroundColor: '#1665AC'
    },
    {
        skill: SkillEnum.React,
        proficiency: 3,
        backgroundColor: '#60DAFA'
    },
    {
        skill: SkillEnum.Angular,
        proficiency: 3,
        backgroundColor: '#DE0032'
    },
    {
        skill: SkillEnum.PetiteVue,
        proficiency: 2,
        backgroundColor: '#41B782'
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
        skill: SkillEnum.MySql,
        proficiency: 4,
        backgroundColor: '#005E86'
    },
    {
        skill: SkillEnum.PostgreSql,
        proficiency: 4,
        backgroundColor: '#31648C'
    },
    {
        skill: SkillEnum.Aws,
        proficiency: 4,
        backgroundColor: '#FF9900'
    },
    {
        skill: SkillEnum.Apache,
        proficiency: 3,
        backgroundColor: '#C02040'
    },
    {
        skill: SkillEnum.Azure,
        proficiency: 2,
        backgroundColor: '#0C57A0'
    },
    {
        skill: SkillEnum.CosmosDb,
        proficiency: 2,
        backgroundColor: '#1566BF'
    },
    {
        skill: SkillEnum.Unity,
        proficiency: 5,
        backgroundColor: '#110B09'
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
        backgroundColor: '#F05133'
    },
    {
        skill: SkillEnum.Svn,
        proficiency: 2,
        backgroundColor: '#809CC9'
    },
    {
        skill: SkillEnum.NodeJs,
        proficiency: 2,
        backgroundColor: '#83CD29'
    },
    {
        skill: SkillEnum.French,
        proficiency: 5,
        backgroundColor: '#CD1125',
        imageRatio: 2
    },
    {
        skill: SkillEnum.English,
        proficiency: 5,
        backgroundColor: '#00247C',
        imageRatio: 2
    },
    {
        skill: SkillEnum.Spanish,
        proficiency: 2,
        textColor: '#FDC400',
        backgroundColor: '#C60B1C',
        imageRatio: 2
    },
    {
        skill: SkillEnum.Japanese,
        proficiency: 1,
        textColor: '#BC012E',
        backgroundColor: '#FFFFFF',
        imageRatio: 2
    }
];

export const skillsProps: SkillsProps = {
    cardProps: cardProps
};

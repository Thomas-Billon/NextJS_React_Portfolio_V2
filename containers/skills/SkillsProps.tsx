import { SkillCardProps } from '@/components/skills/card/SkillCard';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface SkillsProps {
    cardProps: SkillCardProps[];
};

const cardProps: SkillCardProps[] = [
    { skill: SkillEnum.Html5, backgroundColor: '#F16529' },
    { skill: SkillEnum.Css3, backgroundColor: '#2965F1' },
    { skill: SkillEnum.Javascript, backgroundColor: '#F0DB4F', textColor: '#313131' },
    /*
    { skill: SkillEnum.Typescript, backgroundColor: '#007ACC' },
    { skill: SkillEnum.Php, backgroundColor: '#6082BB' },
    { skill: SkillEnum.CSharp, backgroundColor: '#390091' },
    { skill: SkillEnum.CPlusPlus, backgroundColor: '#2E40A5' },
    { skill: SkillEnum.C, backgroundColor: '#00599C' },
    { skill: SkillEnum.ShellScript, backgroundColor: '#2A3538' },
    { skill: SkillEnum.DotNet, backgroundColor: '#1665AC' },
    { skill: SkillEnum.JQuery, backgroundColor: '#1465AC' },
    { skill: SkillEnum.React, backgroundColor: '#60DAFA' },
    { skill: SkillEnum.Angular, backgroundColor: '#DE0032' },
    { skill: SkillEnum.PetiteVue, backgroundColor: '#41B782' },
    { skill: SkillEnum.Scss, backgroundColor: '#CD679B' },
    { skill: SkillEnum.Bootstrap, backgroundColor: '#8312F9' },
    { skill: SkillEnum.Tailwind, backgroundColor: '#39BCF9' },
    { skill: SkillEnum.NextJs, backgroundColor: '#000000' },
    { skill: SkillEnum.ExpressJs, backgroundColor: '#000000' },
    { skill: SkillEnum.ThreeJs, backgroundColor: '#000000' },
    { skill: SkillEnum.SocketIo, backgroundColor: '#000000' },
    { skill: SkillEnum.MySql, backgroundColor: '#005E86' },
    { skill: SkillEnum.PostgreSql, backgroundColor: '#31648C' },
    { skill: SkillEnum.CosmosDb, backgroundColor: '#1566BF' },
    { skill: SkillEnum.Aws, backgroundColor: '#FF9900' },
    { skill: SkillEnum.Azure, backgroundColor: '#0C57A0' },
    { skill: SkillEnum.Apache, backgroundColor: '#C02040' },
    { skill: SkillEnum.Unity, backgroundColor: '#110B09' },
    { skill: SkillEnum.NodeJs, backgroundColor: '#83CD29' },
    { skill: SkillEnum.Photoshop, backgroundColor: '#31A8FF' },
    { skill: SkillEnum.Illustrator, backgroundColor: '#FF9A00' },
    { skill: SkillEnum.Git, backgroundColor: '#F05133' },
    { skill: SkillEnum.Svn, backgroundColor: '#809CC9' },
    { skill: SkillEnum.French, imageRatio: 2 },
    { skill: SkillEnum.English, imageRatio: 2 },
    { skill: SkillEnum.Spanish, textColor: '#C60B1C', imageRatio: 2 },
    { skill: SkillEnum.Japanese, textColor: '#BC012E', imageRatio: 2 }
    */
];

export const skillsProps: SkillsProps = {
    cardProps: cardProps
};
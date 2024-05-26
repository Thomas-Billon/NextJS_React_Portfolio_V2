import { SkillCategoryProps } from '@/components/skills/SkillCategory';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface SkillsProps {
    categoryProps: SkillCategoryProps[];
};

const categoryProps: SkillCategoryProps[] = [
    {
        title: 'Languages',
        skills: [
            { skill: SkillEnum.Html5, backgroundColor: '#F16529' },
            { skill: SkillEnum.Css3, backgroundColor: '#2965F1' },
            { skill: SkillEnum.Javascript, backgroundColor: '#F0DB4F', textColor: '#313131' },
            { skill: SkillEnum.Typescript, backgroundColor: '#007ACC' },
            { skill: SkillEnum.Php, backgroundColor: '#6082BB' },
            { skill: SkillEnum.CSharp, backgroundColor: '#390091' },
            { skill: SkillEnum.CPlusPlus, backgroundColor: '#2E40A5' },
            { skill: SkillEnum.C, backgroundColor: '#00599C' },
            { skill: SkillEnum.ShellScript, backgroundColor: '#2A3538' }
        ]
    },
    {
        title: 'Frameworks',
        skills: [
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
            { skill: SkillEnum.SocketIo, backgroundColor: '#000000' }
        ]
    },
    {
        title: 'Databases',
        skills: [
            { skill: SkillEnum.MySql, backgroundColor: '#005E86' },
            { skill: SkillEnum.PostgreSql, backgroundColor: '#31648C' },
            { skill: SkillEnum.CosmosDb, backgroundColor: '#1566BF' }
        ]
    },
    {
        title: 'Server / Cloud providers',
        skills: [
            { skill: SkillEnum.Aws, backgroundColor: '#FF9900' },
            { skill: SkillEnum.Azure, backgroundColor: '#0C57A0' },
            { skill: SkillEnum.Apache, backgroundColor: '#C02040' }
        ]
    },
    {
        title: 'Tools / Softwares',
        skills: [
            { skill: SkillEnum.Unity, backgroundColor: '#110B09' },
            { skill: SkillEnum.NodeJs, backgroundColor: '#83CD29' },
            { skill: SkillEnum.Photoshop, backgroundColor: '#31A8FF' },
            { skill: SkillEnum.Illustrator, backgroundColor: '#FF9A00' },
            { skill: SkillEnum.Git, backgroundColor: '#F05133' },
            { skill: SkillEnum.Svn, backgroundColor: '#809CC9' }
        ]
    },
    {
        title: 'I also speak ...',
        skillImageRatio: 2,
        skills: [
            { skill: SkillEnum.French },
            { skill: SkillEnum.English },
            { skill: SkillEnum.Spanish, textColor: '#C60B1C' },
            { skill: SkillEnum.Japanese, textColor: '#BC012E' }
        ]
    }
];

export const skillsProps: SkillsProps = {
    categoryProps: categoryProps
};
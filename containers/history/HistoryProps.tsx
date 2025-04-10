import { HistoryNodeCompanyProps, HistoryNodeProps, HistoryNodeSchoolProps } from '@/components/history/card/HistoryNode';
import { HistoryTypeEnum } from '@/utils/enums/HistoryEventEnum';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface HistoryProps {
    eventProps: HistoryNodeProps[];
};

/* eslint-disable quotes */
const timeFrameProps: HistoryNodeProps[] | HistoryNodeCompanyProps[] | HistoryNodeSchoolProps[] = [
    {
        yearStart: 2024,
        type: HistoryTypeEnum.CompanyOnboarding,
        job: {
            title: 'Full-stack Developer',
            description: [
                
            ]
        },
        company: {
            name: 'Afiliza',
            location: 'Paris, France'
        },
        techStack: [
            SkillEnum.CSharp,
            SkillEnum.DotNet,
            SkillEnum.EntityFrameworkCore,
            SkillEnum.PostgreSql,
            SkillEnum.Typescript,
            SkillEnum.JQuery,
            SkillEnum.Angular,
            SkillEnum.Vue,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Scss,
            SkillEnum.Git
        ]
    },
    {
        yearStart: 2021,
        yearEnd: 2024,
        type: HistoryTypeEnum.CompanyCreation,
        job: {
            title: 'President',
            description: [
                "Created and published an online multiplayer mobile game in Unity",
                "Designed and built a scalable server/client architecture using AWS Gamelift",
                "Developed a RESTful API to manage users, validate payments, matchmaking and allow cross-platform usage",
                "Developed the company website from scratch",
                "Developed and enhanced 50+ new in-game features (2 game modes, additional mini games, in-app purchases, achievements, challenges, level-ups, reward distribution, ...)",
                "Led the team and planned the project roadmap for 2+ years"
            ]
        },
        company: {
            name: 'Hoodlum Interactive',
            location: 'Brou sur Chantereine, France'
        },
        techStack: [
            SkillEnum.Unity,
            SkillEnum.CSharp,
            SkillEnum.DotNet,
            SkillEnum.Php,
            SkillEnum.MySql,
            SkillEnum.Javascript,
            SkillEnum.JQuery,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Scss,
            SkillEnum.Aws,
            SkillEnum.Git
        ]
    },
    {
        yearStart: 2019,
        yearEnd: 2021,
        type: HistoryTypeEnum.CompanyPromotion,
        job: {
            title: 'Research & Development Engineer',
            description: [
                "Developed and maintained main SaaS collaborative solution used by 60,000+ users worldwide",
                "Managed the creation and launch of a new automated translation module",
                "Supervised full development process of 80+ new features (Gathering clients' needs, Writing technical specs, Developing features, Monitoring deployment & Guiding final users)",
                "Created 10+ internal tools to improve workflow efficiency and generate KPIs"
            ]
        },
        company: {
            name: 'Diadeis SGSco',
            location: 'Paris, France'
        },
        techStack: [
            SkillEnum.CSharp,
            SkillEnum.AspNetMvc,
            SkillEnum.EntityFramework,
            SkillEnum.PostgreSql,
            SkillEnum.Javascript,
            SkillEnum.JQuery,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Git
        ]
    },
    {
        yearStart: 2018,
        yearEnd: 2019,
        type: HistoryTypeEnum.CompanyPromotion,
        job: {
            title: 'IT Project Manager',
            description: [
                "Identified our client's (Nestlé) needs and wrote 20+ technical specifications",
                "Managed the creation and launch of a new e-commerce platform",
                "Trained and accompanied users' transition from legacy tool towards the main SaaS collaborative solution",
                "Coordinated and organized projects deliveries with final users and the development team"
            ]
        },
        company: {
            name: 'Diadeis SGSco',
            location: 'Paris, France'
        },
        techStack: [
            SkillEnum.CSharp,
            SkillEnum.AspNetMvc,
            SkillEnum.EntityFramework,
            SkillEnum.PostgreSql,
            SkillEnum.Javascript,
            SkillEnum.JQuery,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Git
        ]
    },
    {
        yearStart: 2015,
        yearEnd: 2015,
        type: HistoryTypeEnum.CompanyOnboarding,
        job: {
            title: 'Full-stack Developer',
            description: [
                "Created a custom video player and video annotation system according to client's needs (Renault)",
                "Handled and fixed customer support level 3 queries",
                "Participated to daily scrum and sprint reviews"
            ]
        },
        company: {
            name: 'Diadeis SGSco',
            location: 'Paris, France'
        },
        techStack: [
            SkillEnum.CSharp,
            SkillEnum.AspNetMvc,
            SkillEnum.EntityFramework,
            SkillEnum.PostgreSql,
            SkillEnum.Javascript,
            SkillEnum.JQuery,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Svn
        ]
    },
    {
        yearStart: 2016,
        yearEnd: 2017,
        type: HistoryTypeEnum.CompanyOnboarding,
        job: {
            title: 'Assistant System Administrator',
            description: [
                "Analyzed and compiled 30+ network performances issues and planned for solutions",
                "Optimized and improved website performances by 10%",
                "Deployed website updates through AWS"
            ]
        },
        company: {
            name: 'Women\'s WorldWide Web',
            location: 'Paris, France'
        },
        techStack: [
            SkillEnum.Aws
        ]
    },
    {
        yearStart: 2015,
        yearEnd: 2015,
        type: HistoryTypeEnum.CompanyOnboarding,
        job: {
            title: 'Web Developer',
            description: [
                "Created 10+ new functionalities on the website and back office",
                "Developed a brand new newsletter website with Wordpress"
            ]
        },
        company: {
            name: 'SOSav',
            location: 'Lognes, France'
        },
        techStack: [
            SkillEnum.Php,
            SkillEnum.MySql,
            SkillEnum.Javascript,
            SkillEnum.JQuery,
            SkillEnum.Html5,
            SkillEnum.Css3,
            SkillEnum.Git
        ]
    },
    {
        yearStart: 1996,
        type: HistoryTypeEnum.Birthday
    }
];

export const historyProps: HistoryProps = {
    eventProps: timeFrameProps
};

import { HistoryEventProps, HistoryEventCompanyProps, HistoryEventSchoolProps } from '@/components/history/HistoryEvent';
import { HistoryEventEnum } from '@/utils/enums/HistoryEventEnum';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { DateOnly } from '@/utils/global/DateOnly';


export interface HistoryProps {
    eventProps: HistoryEventProps[];
};

/* eslint-disable quotes */
const timeFrameProps: HistoryEventProps[] | HistoryEventCompanyProps[] | HistoryEventSchoolProps[] = [
    {
        date: new DateOnly(2024, 1, 8),
        type: HistoryEventEnum.CompanyOnboarding,
        jobTitle: 'Full-stack Developer',
        jobDescription: [
            
        ],
        companyName: 'Afiliza',
        companyLocation: 'Paris, France',
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
        date: new DateOnly(2021, 7, 1),
        type: HistoryEventEnum.CompanyCreation,
        jobTitle: 'President',
        jobDescription: [
            "Created and published an online multiplayer mobile game in Unity",
            "Designed and built a scalable server/client architecture using AWS Gamelift",
            "Developed a RESTful API to manage users, validate payments, matchmaking and allow cross-platform usage",
            "Developed the company website from scratch",
            "Developed and enhanced 50+ new in-game features (2 game modes, additional mini games, in-app purchases, achievements, challenges, level-ups, reward distribution, ...)",
            "Led the team and planned the project roadmap for 2+ years"
        ],
        companyName: 'Hoodlum Interactive',
        companyLocation: 'Brou sur Chantereine, France',
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
        date: new DateOnly(2019, 3, 8),
        type: HistoryEventEnum.CompanyPromotion,
        jobTitle: 'Research & Development Engineer',
        jobDescription: [
            "Developed and maintained main SaaS collaborative solution used by 60,000+ users worldwide",
            "Managed the creation and launch of a new automated translation module",
            "Supervised full development process of 80+ new features (Gathering clients' needs, Writing technical specs, Developing features, Monitoring deployment & Guiding final users)",
            "Created 10+ internal tools to improve workflow efficiency and generate KPIs"
        ],
        companyName: 'Diadeis SGSco',
        companyLocation: 'Paris, France',
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
        date: new DateOnly(2018, 9, 3),
        type: HistoryEventEnum.CompanyPromotion,
        jobTitle: 'IT Project Manager',
        jobDescription: [
            "Identified our client's (Nestlé) needs and wrote 20+ technical specifications",
            "Managed the creation and launch of a new e-commerce platform",
            "Trained and accompanied users' transition from legacy tool towards the main SaaS collaborative solution",
            "Coordinated and organized projects deliveries with final users and the development team"
        ],
        companyName: 'Diadeis SGSco',
        companyLocation: 'Paris, France',
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
        date: new DateOnly(2015, 8, 10),
        type: HistoryEventEnum.CompanyOnboarding,
        jobTitle: 'Full-stack Developer',
        jobDescription: [
            "Created a custom video player and video annotation system according to client's needs (Renault)",
            "Handled and fixed customer support level 3 queries",
            "Participated to daily scrum and sprint reviews"
        ],
        companyName: 'Diadeis SGSco',
        companyLocation: 'Paris, France',
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
        date: new DateOnly(2016, 9, 19),
        type: HistoryEventEnum.CompanyOnboarding,
        jobTitle: 'Assistant System Administrator',
        jobDescription: [
            "Analyzed and compiled 30+ network performances issues and planned for solutions",
            "Optimized and improved website performances by 10%",
            "Deployed website updates through AWS"
        ],
        companyName: 'Women\'s WorldWide Web',
        companyLocation: 'Paris, France',
        techStack: [
            SkillEnum.Aws
        ]
    },
    {
        date: new DateOnly(2017, 4, 3),
        type: HistoryEventEnum.CompanyOnboarding,
        jobDescription: [
            "Created 10+ new functionalities on the website and back office",
            "Developed a brand new newsletter website with Wordpress"
        ],
        jobTitle: 'Web Developer',
        companyName: 'SOSav',
        companyLocation: 'Lognes, France',
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
        date: new DateOnly(1996, 11, 11),
        type: HistoryEventEnum.Birthday
    }
];

export const historyProps: HistoryProps = {
    eventProps: timeFrameProps
};

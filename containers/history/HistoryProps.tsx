import { HistoryEventBirthdayProps, HistoryEventSchoolProps, HistoryEventCompanyProps, HistoryEventOrganizationProps } from '@/components/history/event/HistoryEvent';
import { HistoryEventTypeEnum } from '@/utils/enums/HistoryEventTypeEnum';
import { SkillEnum } from '@/utils/enums/SkillEnum';
import { DateOnly } from '@/utils/global/DateOnly';


export interface HistoryProps {
    eventProps: (HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps)[];
};

const diadeis: HistoryEventOrganizationProps = {
    name: 'Diadeis SGSco',
    city: 'Paris',
    country: 'France'
};

/* eslint-disable quotes */
const eventProps: (HistoryEventBirthdayProps | HistoryEventSchoolProps | HistoryEventCompanyProps)[] = [
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2024, 1, 8),
        job: {
            title: 'Full-stack Developer',
            description: [
            ],
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
        company: {
            name: 'Afiliza',
            city: 'Paris',
            country: 'France'
        }
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2021, 7, 1),
        dateEnd: new DateOnly(2024, 9, 30),
        job: {
            title: 'President',
            description: [
                "Created and published an online multiplayer mobile game in Unity",
                "Designed and built a scalable server/client architecture using AWS Gamelift",
                "Developed a RESTful API to manage users, validate payments, matchmaking and allow cross-platform usage",
                "Developed the company website from scratch",
                "Developed and enhanced 50+ new in-game features (2 game modes, additional mini games, in-app purchases, achievements, challenges, level-ups, reward distribution, ...)",
                "Led the team and planned the project roadmap for 2+ years"
            ],
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
        company: {
            name: 'Hoodlum Interactive',
            city: 'Brou sur Chantereine',
            country: 'France'
        }
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2019, 3, 25),
        dateEnd: new DateOnly(2021, 3, 31),
        job: {
            title: 'Research & Development Engineer',
            description: [
                "Developed and maintained main SaaS collaborative solution used by 60,000+ users worldwide",
                "Managed the creation and launch of a new automated translation module",
                "Supervised full development process of 80+ new features (Gathering clients' needs, Writing technical specs, Developing features, Monitoring deployment & Guiding final users)",
                "Created 10+ internal tools to improve workflow efficiency and generate KPIs"
            ],
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
        company: diadeis
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2018, 9, 3),
        dateEnd: new DateOnly(2019, 2, 27),
        job: {
            title: 'IT Project Manager',
            description: [
                "Identified our client's (Nestlé) needs and wrote 20+ technical specifications",
                "Managed the creation and launch of a new e-commerce platform",
                "Trained and accompanied users' transition from legacy tool towards the main SaaS collaborative solution",
                "Coordinated and organized projects deliveries with final users and the development team"
            ],
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
        company: diadeis
    },
    {
        type: HistoryEventTypeEnum.School,
        dateStart: new DateOnly(2018, 9, 1),
        dateEnd: new DateOnly(2019, 9, 1),
        school: {
            name: 'Université de Haute-Alsace',
            city: 'Mulhouse',
            country: 'France'
        },
        education: {
            degree: 'Master\'s degree',
            fieldOfStudy: 'Project management',
            description: "Learned project management in partnership with Epitech and UHA (Université de Haute-Alsace)"
        }
    },
    {
        type: HistoryEventTypeEnum.School,
        dateStart: new DateOnly(2017, 8, 1),
        dateEnd: new DateOnly(2018, 8, 1),
        school: {
            name: 'Australian Catholic University',
            city: 'Sydney',
            country: 'Australia'
        },
        education: {
            degree: '4th year overseas',
            fieldOfStudy: 'Information technology / Project management',
            description: "Fourth year overseas at ACU (Australian Catholic University) as part of the curriculum of Epitech"
        }
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2017, 4, 3),
        dateEnd: new DateOnly(2017, 7, 13),
        job: {
            title: 'Full-stack Developer',
            description: [
                "Created a custom video player and video annotation system according to client's needs (Renault)",
                "Handled and fixed customer support level 3 queries",
                "Participated to daily scrum and sprint reviews"
            ],
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
        company: diadeis
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2016, 9, 29),
        dateEnd: new DateOnly(2017, 3, 31),
        job: {
            title: 'Assistant System Administrator',
            description: [
                "Analyzed and compiled 30+ network performances issues and planned for solutions",
                "Optimized and improved website performances by 10%",
                "Deployed website updates through AWS"
            ],
            techStack: [
                SkillEnum.Aws
            ]
        },
        company: {
            name: 'Women\'s WorldWide Web',
            city: 'Paris',
            country: 'France'
        }
    },
    {
        type: HistoryEventTypeEnum.Company,
        dateStart: new DateOnly(2015, 8, 10),
        dateEnd: new DateOnly(2015, 12, 31),
        job: {
            title: 'Web Developer',
            description: [
                "Created 10+ new functionalities on the website and back office",
                "Developed a brand new newsletter website with Wordpress"
            ],
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
        company: {
            name: 'SOSav',
            city: 'Lognes',
            country: 'France'
        }
    },
    {
        type: HistoryEventTypeEnum.School,
        dateStart: new DateOnly(2014, 1, 1),
        dateEnd: new DateOnly(2019, 1, 1),
        school: {
            name: 'Epitech',
            city: 'Paris',
            country: 'France'
        },
        education: {
            degree: 'Master\'s degree',
            fieldOfStudy: 'Information technology',
            description: "Learned programming basics with multiple languages including C and C++"
        }
    },
    {
        type: HistoryEventTypeEnum.Birthday,
        date: new DateOnly(1996, 11, 11)
    }
];

export const historyProps: HistoryProps = {
    eventProps: eventProps
};

import { ProjectCardProps } from '@/components/projects/card/ProjectCard';
import { ProjectCardButtonMinigameProps } from '@/components/projects/card/ProjectCardButtonMinigame';
import { MinigameActionEnum } from '@/utils/enums/MinigameActionEnum';
import { SkillEnum } from '@/utils/enums/SkillEnum';


export interface ProjectsProps {
    cardProps: ProjectCardProps[];
    minigameProps: ProjectCardButtonMinigameProps[];
};

const cardProps: ProjectCardProps[] = [
    {
        title: 'Porfolio v2',
        description: [
            'The second iteration of my portfolio',
            'I decided to remake it entirely with different languages & frameworks as a way to both learn and practice',
        ],
        images: [
            { src: '/img1.jpg', alt: 'Image 1' },
            { src: '/img2.jpg', alt: 'Image 2' },
            { src: '/img3.jpg', alt: 'Image 3' },
            { src: '/img4.jpg', alt: 'Image 4' },
            { src: '/img5.jpg', alt: 'Image 5' }
        ],
        links: [
            { href: '/projects/portfolio-v2', isMinigame: true },
            { href: 'https://github.com/Thomas-Billon/NextJS_React_Portfolio_V2' }
        ],
        tags: [SkillEnum.CSharp, SkillEnum.DotNetCore, SkillEnum.Javascript],
        year: 2024
    },
    {
        title: 'Spicy Party',
        description: [
            'This is my first venture into the world of game development',
            'Spicy Party is a mobile multiplayer card game based on the concept of Cards Against Humanity'
        ],
        images: [
            { src: '/static/images/projects/spicy_party_1.jpg', alt: 'Spicy Party Logo' },
            { src: '/static/images/projects/spicy_party_2.jpg', alt: 'Gameplay Showcase 1' },
            { src: '/static/images/projects/spicy_party_3.jpg', alt: 'Gameplay Showcase 2' },
            { src: '/static/images/projects/spicy_party_4.jpg', alt: 'Gameplay Showcase 3' },
            { src: '/static/images/projects/spicy_party_5.jpg', alt: 'Gameplay Showcase 4' }
        ],
        links: [
            {
                href: 'https://apps.apple.com/us/app/spicy-party/id1627063798',
                src: '/static/images/projects/badge_app_store.png',
                alt: 'Donwload on the App Store',
                width: 160,
                height: 53
            },
            {
                href: 'https://play.google.com/store/apps/details?id=com.HoodlumInteractive.SpicyParty',
                src: '/static/images/projects/badge_play_store.png',
                alt: 'Get it on Google Play',
                width: 180,
                height: 53
            }
        ],
        tags: [SkillEnum.CSharp, SkillEnum.DotNetCore, SkillEnum.Javascript],
        year: 2023
    },
    {
        title: 'Porfolio v1',
        description: [
            'The first iteration of my portfolio',
            'I made this website back when I was still learning how to code',
            'And thanks to it, I was able to get my first internship, cheers!'
        ],
        images: [
            { src: '/static/images/projects/portfolio_v1_1.jpg', alt: 'Portfolio Showcase 1' },
            { src: '/static/images/projects/portfolio_v1_2.jpg', alt: 'Portfolio Showcase 2' },
            { src: '/static/images/projects/portfolio_v1_3.jpg', alt: 'Portfolio Showcase 3' },
            { src: '/static/images/projects/portfolio_v1_4.jpg', alt: 'Portfolio Showcase 4' },
            { src: '/static/images/projects/portfolio_v1_5.jpg', alt: 'Portfolio Showcase 5' }
        ],
        links: [
            { href: '/projects/portfolio-v1' },
            { href: 'https://github.com/Thomas-Billon/PHP_Portfolio_V1' }
        ],
        tags: [SkillEnum.CSharp, SkillEnum.DotNetCore, SkillEnum.Javascript],
        year: 2015
    }
];

const minigameProps: ProjectCardButtonMinigameProps[] = [
    {
        text:
            "Oh! Um... hi! <br />" +
            "Yeah, you're already on the portfolio <br />" +
            "So... there's nothing to see here, please click somewhere else"
    },
    {
        text:
            "Wait, I just... I just told you, nothing is here <br />" +
            "Look, there's another interesting project right over there!"
    },
    {
        text:
            "Are you doing this on purpose?"
    },
    {
        text:
            "You have to be doing this on purpose"
    },
    {
        text:
            "Okay... I'm pretty sure you're doing this on purpose"
    },
    {
        text:
            "Oh great! You are doing this on purpose!"
    },
    {
        text:
            "I knew it! I... I had a feeling!"
    },
    {
        text:
            "I don't get it... What do you want from me?"
    },
    {
        text:
            "Look man, I don't want any trouble, just... just go away..."
    },
    {
        text:
            "Please?"
    },
    {
        text:
            "Do you even understand me?"
    },
    {
        text:
            "Hello?"
    },
    {
        text:
            "¿Holà?"
    },
    {
        text:
            "Bonjour ?"
    },
    {
        text:
            "<span style=\"font-style: italic\">" +
                "Chinese hello?" +
            "</span>"
    },
    {
        text:
            "Alright, no more button for you mister sinister!",
        actionAtStart: MinigameActionEnum.DisableButton,
        actionAtEnd: MinigameActionEnum.RemoveOpacity
    }
];

export const projectsProps: ProjectsProps = {
    cardProps,
    minigameProps
};
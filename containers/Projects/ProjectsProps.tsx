import { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import { SkillEnum } from '@/utils/SkillEnum';

export const projectsProps: ProjectCardProps[] = [
    {
        title: 'Porfolio v2',
        description: [
            'The second iteration of my portfolio',
            'I decided to remake it entirely with different languages & frameworks as a way to both learn and practice',
        ],
        images: [
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
            { src: 'img3.jpg', alt: 'Image 3' },
            { src: 'img4.jpg', alt: 'Image 4' },
            { src: 'img5.jpg', alt: 'Image 5' }
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
            'Spicy Party is a mobile multiplayer card game based on the concept of Cards Against Humanity',
            'It is currently available for free on the App store and the Play store'
        ],
        images: [
            { src: '/static/images/projects/spicy_party_1.jpg', alt: 'Spicy Party Logo' },
            { src: '/static/images/projects/spicy_party_2.jpg', alt: 'Gameplay Showcase 1' },
            { src: '/static/images/projects/spicy_party_3.jpg', alt: 'Gameplay Showcase 2' },
            { src: '/static/images/projects/spicy_party_4.jpg', alt: 'Gameplay Showcase 3' },
            { src: '/static/images/projects/spicy_party_5.jpg', alt: 'Gameplay Showcase 4' }
        ],
        links: [
            { href: 'https://apps.apple.com/us/app/spicy-party/id1627063798', src: 'img2.jpg', alt: 'App Store' },
            { href: 'https://play.google.com/store/apps/details?id=com.HoodlumInteractive.SpicyParty', src: 'img1.jpg', alt: 'Play Store' }
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
]
import { ProjectCardProps } from '@/components/ProjectCard/ProjectCard';
import { TagEnum } from '@/utils/TagEnum';

export const projectsProps: ProjectCardProps[] = [
    {
        title: 'Widilo',
        descriptions: [
            'A cashback and voucher platform'
        ],
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ],
        links: [
            'http://localhost:3000'
        ],
        tags: [TagEnum.CSharp, TagEnum.DotNet, TagEnum.Javascript],
        year: 2024
    },
    {
        title: 'Porfolio v2',
        descriptions: [
            'You are currently watching it'
        ],
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ],
        links: [
            'http://localhost:3000'
        ],
        tags: [TagEnum.CSharp, TagEnum.DotNet, TagEnum.Javascript],
        year: 2024
    },
    {
        title: 'Spicy Party',
        descriptions: [
            'A mobile multiplayer card game'
        ],
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ],
        links: [
            'http://localhost:3000'
        ],
        tags: [TagEnum.CSharp, TagEnum.DotNet, TagEnum.Javascript],
        year: 2024
    },
    {
        title: 'Mediabox',
        descriptions: [
            'A SAAS web application for prepress workflows'
        ],
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ],
        links: [
            'http://localhost:3000'
        ],
        tags: [TagEnum.CSharp, TagEnum.DotNet, TagEnum.Javascript],
        year: 2024
    },
    {
        title: 'Porfolio v1',
        descriptions: [
            'The first version of this'
        ],
        images: [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ],
        links: [
            'http://localhost:3000'
        ],
        tags: [TagEnum.CSharp, TagEnum.DotNet, TagEnum.Javascript],
        year: 2024
    }
]
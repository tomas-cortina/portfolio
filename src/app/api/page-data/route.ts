import { NextResponse } from 'next/server';

const experienceData = [
    {
        icon: '/images/icon/tailwind-icon.svg',
        role: 'Full Stack Web Developer — Ugarte S.A.',
        location: 'CABA, Buenos Aires',
        startYear: '2022',
        endYear: '2025',
        bulletPoints: [
            'Designed and developed a comprehensive quoting and invoicing system for sales and promotions, digitizing key processes in the automotive business.',
            'Built the AVE system (Asistente de Ventas Ugarte) with React, NestJS, Prisma, and PostgreSQL.',
            'Integrated AVE with an external ERM via SQL Server to synchronize products, stock, and sales conditions.',
            'Implemented multi-page PDF generation of quotes using html2canvas and jsPDF.',
            'Built a remarketing module through customer quote tracking and registration.',
        ],
    },
    {
        icon: '/images/icon/asana-icon.svg',
        role: 'Full Stack Mobile App Developer — Habit Tracker (Academic)',
        location: 'CABA, Buenos Aires',
        startYear: '2024',
        endYear: '2024',
        bulletPoints: [
            'Built a full stack mobile app for habit tracking with React Native, Node.js, and PostgreSQL (Prisma ORM).',
            'Implemented JWT authentication and image handling.',
            'Designed a habit tracking system with automatic streaks and visual indicators.',
            'Configured the dev environment with Docker Compose, automated migrations, and unit testing.',
        ],
    },
];

const educationData = [
    {
        date: 'Apr 2018 — Dec 2027',
        title: 'B.S. in Computer Engineering',
        subtitle:
            'Pontificia Universidad Católica Argentina — CABA, Buenos Aires',
    },
];

const studiesData = [
    {
        title: 'Information Systems Engineering',
        subtitle: 'Catholic University of Argentina',
        date: 'Jan 2021 – Dec 2026',
        image: '/images/feature-work/uca-logo.png',
        badges: [
            'Python Computing',
            'Web Development',
            'Communication Networks',
            'Structured Programming',
            'Business Administration',
            'Object Oriented Programming',
            'Statistics',
            'Software Engineering',
            'Advanced Physics',
            'Advanced Calculus',
            'Algebra',
            'Software Design',
            'Numeric Methods',
            'Internet Protocols',
            'Discrete Mathematics',
            'Data Structures',
            'Operating Systems',
            'Algorithms & Computer Logic',
            'Relational Databases',
            'Mobile Applications',
            'Artificial Intelligence',
            'Models & Simulations',
            'Parallel Programming & Clusters',
            'Mathematical Programming',
            'Introduction to Quantum Computing',
        ],
    },
    {
        title: 'Data Engineering',
        subtitle: 'AWS Academy',
        date: 'Jan 2026 – June 2026',
        image: '/images/feature-work/aws-logo.png',
        badges: [
            'Data Pipelines',
            'Data Engineering',
            'Data Security',
            'Data Governance',
            'S3',
            'Athena',
            'Cloud 9',
            'IAM',
            'Cloud Formation',
            'Glue',
            'Redshift',
            'EC2',
            'EMR',
            'Kinesis',
            'Cloud Watch',
            'Step Functions',
        ],
    },
];

const projectOverview = {
    projects: [
        {
            name: 'Habit Tracker Mobile App',
            url: 'https://github.com/lucasditomase/Grupo-3',
        },
        {
            name: 'Portfolio',
            url: 'https://github.com/tomas-cortina/portfolio',
        },
        {
            name: 'SHA3 Interactive Demo',
            url: 'https://github.com/tomas-cortina/sha3-interactive-demo',
        },
        { name: '.NET-Angular E-commerce', comingSoon: true },
    ],
};

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        studiesData,
        projectOverview,
    });
};

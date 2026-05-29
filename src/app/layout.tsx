import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Tomas Cortina',
    description:
        'This is Tomas Cortina personal portfolio website built with Next.js and shadcn/ui. Showcasing my projects, skills, and experience as a Full-Stack Developer.',
    icons: {
        icon: '/images/profile/icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

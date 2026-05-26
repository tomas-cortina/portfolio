import { Badge } from '@/components/ui/badge';

const AboutMe = () => {
    const servicesBedge = [
        'React',
        'React Native',
        'Next.js',
        'TypeScript',
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'Docker',
        'AWS',
        'RESTful APIs',
        'Microservices',
        'CI/CD',
    ];
    return (
        <section>
            <div className="container">
                <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                About Me
                            </p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Hey there. I'm Tomás — Full Stack Developer
                                based in Buenos Aires, specialized in{' '}
                                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                                    building web & mobile products
                                </span>{' '}
                                with{' '}
                                <span className="border-b-2">
                                    React, NestJS & PostgreSQL
                                </span>
                                .
                            </h2>
                            <h5 className="text-secondary font-normal">
                                Studying Computer Engineering at UCA Buenos
                                Aires.
                            </h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge
                                            variant={'outline'}
                                            key={index}
                                            className="py-1.5 px-3 rounded-lg h-full"
                                        >
                                            <p className="text-xs sm:text-sm font-medium text-primary">
                                                {value}
                                            </p>
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

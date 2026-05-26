import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const socialIcon = [
        {
            img: '/images/icon/linkedin-icon.svg',
            href: 'www.linkedin.com/in/tomas-cortina',
            icon: 'LinkedIn',
        },
        {
            img: '/images/icon/github-icon.svg',
            href: 'https://github.com',
            icon: 'GitHub',
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image
                            src={'/images/hero-sec/banner-bg-img.png'}
                            alt="banner-bg-img"
                            width={1080}
                            height={267}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="border-x border-border">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image
                                    src={'/images/hero-sec/profile-img.png'}
                                    alt="profile-img"
                                    width={145}
                                    height={145}
                                    className="border-4 border-white rounded-full"
                                />
                            </div>
                            <div className="flex flex-col  gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Tomás Cortina</h1>
                                <p className="text-slate-600 font-normal">
                                    Junior Full-Stack Developer
                                </p>
                                <div className="flex items-center bo gap-2">
                                    <Image
                                        src={'/images/icon/map-icon.svg'}
                                        alt="map-icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-primary">
                                        Vicente Lopez, Gran Buenos Aires
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link
                                                href={value?.href}
                                                key={index}
                                                className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                                            >
                                                <Image
                                                    src={value?.img}
                                                    alt={value?.icon}
                                                    width={18}
                                                    height={18}
                                                />
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className="flex items-center  gap-3">
                                    <Button className="h-auto rounded-full p-0">
                                        <Link
                                            href="mailto:tomas.cortina00@gmail.com"
                                            className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#0f172a_12.17%,_#1e40af_90.71%)]"
                                        >
                                            <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#0f172a_12.17%,_#1e40af_90.71%)] py-2.5 px-5 rounded-full">
                                                <span className="text-sm sm:text-base font-semibold text-white">
                                                    Get in touch
                                                </span>
                                            </span>
                                        </Link>
                                    </Button>
                                    <Button
                                        variant={'outline'}
                                        className="h-auto py-2.5 px-5 rounded-full"
                                        nativeButton={false}
                                        render={
                                            <a
                                                href={'/resume/ResumeTomasCortina.pdf'}
                                                download
                                            >
                                                Download Resume
                                            </a>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const Studies = () => {
    const [studiesData, setStudiesData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setStudiesData(data?.studiesData);
            } catch (error) {
                console.error('Error fetching studies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Studies
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col border-t border-border divide-y divide-border max-w-3xl mx-auto">
                        {studiesData?.map((value: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 px-4 sm:px-7 py-7"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-full border border-border overflow-hidden flex items-center justify-center bg-white">
                                            <Image
                                                src={value?.image}
                                                alt={value?.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h5 className="font-semibold leading-snug">
                                                {value?.title}
                                            </h5>
                                            <p className="text-sm text-muted-foreground">
                                                {value?.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground whitespace-nowrap pt-0.5">
                                        {value?.date}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {value?.badges?.map(
                                        (badge: string, i: number) => (
                                            <Badge
                                                key={i}
                                                variant="outline"
                                                className="py-1 px-2.5 rounded-sm"
                                            >
                                                <p className="text-xs font-medium text-primary">
                                                    {badge}
                                                </p>
                                            </Badge>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studies;

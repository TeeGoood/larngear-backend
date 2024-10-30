import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import './style.css';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import BorderTopSVG from '@public/border-top.svg';

interface BorderProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
    topBorder?: StaticImageData;
    className?: string;
}

export default function Border({
    children,
    topBorder = BorderTopSVG,
    className,
}: BorderProps) {
    return (
        <div className="min-h-screen w-full flex-col">
            <Image src={topBorder} alt="border-top" className="w-full" />
            <div
                // -mt-[4px] is magic number to merge border-top and div
                className={cn(
                    '-mt-[4px] min-h-10 w-full border-b-4 border-l-4 border-r-4 border-b-black border-l-black border-r-black bg-project-dark-blue',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Sidebar from './Sidebar';
import Header from './Header';

export default function PageLayout({
    children,
    scrollable = false
}: {
    children: React.ReactNode;
    scrollable?: boolean;
}) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full flex-1 overflow-hidden">
                <Header />
                {scrollable ? (
                    <ScrollArea className="h-[calc(100dvh-52px)]">
                        <div className="h-full  p-4 md:px-8">{children}</div>
                    </ScrollArea>
                ) : (
                    <div className="h-full  p-4 md:px-8">{children}</div>

                )}
            </main>
        </div>
    );
}
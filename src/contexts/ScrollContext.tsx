'use client'
import { createContext, MutableRefObject, useCallback, useRef, useState } from 'react';

export const ScrollContext = createContext<{
    targetRef: MutableRefObject<HTMLDivElement | null> | null;
    targetId: string;
    handleClick: (targetId: string) => void;
}>({
    targetRef: null,
    targetId: '',
    handleClick: () => { },
});

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [targetId, setTargetId] = useState<string>('');

    const handleClick = async (id: string) => {
        await setTargetId(id)

        if (id === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <ScrollContext.Provider value={{ targetRef, targetId, handleClick }}>
            <div>{children}</div>
        </ScrollContext.Provider>
    )
}

export default ScrollProvider
import { type RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
    close: () => void,
): RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                ref.current !== null &&
                !ref.current.contains(event.target as Node)
            ) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [close]);

    return ref;
};

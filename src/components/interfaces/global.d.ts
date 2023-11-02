declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
    import { type ReactElement, type SVGProps } from 'react';
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}

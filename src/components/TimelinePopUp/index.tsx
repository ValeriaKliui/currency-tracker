import { Component } from 'react';
import { createRoot } from 'react-dom/client';

import { PopUpContainer } from './styled';

export class TimelinePopUp extends Component {
    popUpElem: HTMLElement | null = document.getElementById('pop-up');
    root =
        this.popUpElem !== null ? createRoot(this.popUpElem as Element) : null;

    componentDidMount(): void {
        setTimeout(() => {
            this.root?.unmount();
        }, 3000);
    }

    mount() {
        this.root?.render(<TimelinePopUp />);
    }

    render() {
        return (
            <PopUpContainer data-cy="timeline-popup">
                Timeline for 1 month was build
            </PopUpContainer>
        );
    }
}

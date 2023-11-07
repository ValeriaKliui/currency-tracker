import { TimelinePopUp } from '@components/TimelinePopUp';
import { type TimelineDayData } from '@constants/interfaces/interfaces';

import type { Observer, Subject } from './interfaces';

export class ConcreteSubject implements Subject {
    private readonly data: TimelineDayData[];
    private readonly observers: Observer[] = [];

    constructor(data: TimelineDayData[]) {
        this.data = data;
    }

    public processData(): void {
        this.notify();
    }

    public subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return;
        }

        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return;
        }

        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

export class TimelineObserver implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            const popUp = new TimelinePopUp('');
            popUp.mount();
        }
    }
}
export const observer = new TimelineObserver();

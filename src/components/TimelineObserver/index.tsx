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
            console.log('Subject: Observer has been attached already.');
            return;
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('Subject: Nonexistent observer.');
            return;
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

export class TimelineObserver implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

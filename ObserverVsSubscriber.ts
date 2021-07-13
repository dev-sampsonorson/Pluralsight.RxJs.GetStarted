import { Observable, of, from, fromEvent, concat } from 'rxjs';

let myNumbers = [1, 3, 5];
let numberObservable$ = new Observable(subscriber => {
    if (myNumbers.length === 0) { subscriber.error('No values'); }

    for (let num of myNumbers) {
        subscriber.next(num);
    }

    subscriber.complete();
});
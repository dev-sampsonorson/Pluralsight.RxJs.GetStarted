import { Observable, of, from, fromEvent, concat } from 'rxjs';

let myObserver = {
    next: value => console.log(`Value produced: ${value}`),
    error: err => console.log(`ERROR: ${err}`),
    complete: () => console.log(`All done producing values.`)
};

let sourceObservable$ = of(1, 3, 5);
sourceObservable$.subscribe(myObserver);
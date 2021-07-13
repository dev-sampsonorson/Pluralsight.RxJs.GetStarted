import { Observable, of, from, fromEvent, concat } from 'rxjs';

let sourceObservable$ = of(1, 3, 5);

sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`),
    err => console.log(`ERROR: ${err}`),
    () => console.log(`All done producing values.`)
);


sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`),
    err => console.log(`ERROR: ${err}`)
);


sourceObservable$.subscribe(
    value => console.log(`Value produced: ${value}`)
);
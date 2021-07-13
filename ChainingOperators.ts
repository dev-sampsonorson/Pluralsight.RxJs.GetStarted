import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { allBooks, allReaders, Book } from './data';
import { ajax } from 'rxjs/ajax';

let source$ = of(1, 2, 3, 4, 5);

/* 
Old syntax
source$
    .map(value => value * 2)
    .filter(mappedValue => mappedValue > 5)
    .subscribe(
        finalValue => console.log(finalValue) // 6, 8, 10
    ); */


// New syntaxt
source$.pipe(
    map(value => value * 2),
    filter(mappedValue => mappedValue > 5)
)
.subscribe(
    finalValue => console.log(finalValue) // 6, 8, 10
);

// Categories of Operators
// - Transformation
// - Filtering
// - Combination
// - Utility
// - Conditional
// - Aggregate
// - Multicasting
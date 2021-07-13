import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { allBooks, allReaders, Book } from './data';
import { ajax } from 'rxjs/ajax';

let source$ = of(1, 2, 3, 4, 5);

let doubler = map<number, number>(value => value * 2); // Configure the operator

let doubled$ = doubler(source$); // apply the observable to the operator

doubled$.subscribe( // subscribe to the observable operator
    value => console.log(value) // 2, 4, 6, 8, 10
);
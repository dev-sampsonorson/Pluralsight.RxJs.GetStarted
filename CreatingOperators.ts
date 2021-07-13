import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { allBooks, allReaders, Book } from './data';
import { ajax } from 'rxjs/ajax';

let source$ = of(1, 2, 3, 4, 5);

function doublerOperator() {
    return map<number, number>(value => value * 2);
}

source$.pipe(
    doublerOperator()
)
.subscribe(
    doubledValue => console.log(doubledValue) //2, 4, 6, 8, 10
);


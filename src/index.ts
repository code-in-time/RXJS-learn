import { Observable, of, from, fromEvent, timer, interval, take, map, forkJoin, combineLatest, filter, tap, Subscription} from 'rxjs';
import { ajax } from 'rxjs/ajax';


/*
  pipe filter
*/
const cl$ = interval(1000).pipe(filter((x) => x !== 2), tap((x) => console.log('x', x))).subscribe(
  {
    next: (x) => { console.log('interval next: ', x); },
    complete: () => console.log('interval complete: ' ),
    error: (x) => console.log('interval error: ', x),
  }
);

console.log('cl$', cl$)

setTimeout(() => {
  cl$.unsubscribe()
  console.log('cl$', cl$)
}, 3000);

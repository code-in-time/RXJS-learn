import { Observable, of, from, fromEvent, timer, interval, take, map, forkJoin, combineLatest, ConnectableObservable} from 'rxjs';
import { ajax } from 'rxjs/ajax';

// const obs1$ = timer(10000).pipe(map( () => 'obs1'));
// const obs2$ = timer(2000).pipe(map( () => 'obs2'));
// const obs3$ = timer(3000).pipe(map(() => 'obs3'));
// const obs4$ = timer(2000).pipe(map(() => { throw ('ttttttt'); 'obs3' }));


// /*
//   forkJoin
// */
// const forkJoin$ = forkJoin([obs1$, obs2$, obs3$, obs4$]).subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete'),
//   error: (s) => console.log('error', s)
// })





























/*
  combineLatest
  note take will make it complete after 3 returns
  if take was not here then it would never complete
*/


const obs1$ = interval(1000).pipe(map((x) => x))
const obs2$ = interval(2000).pipe(map(() => '2'))
const obs3$ = interval(3000).pipe(map(() => '3'))

const cl$ = combineLatest([obs1$, obs2$, obs3$]).subscribe(
  {
    next: (x) => console.log('interval next: ', x),
    complete: () => console.log('interval complete: ' ),
    error: (x) => console.log('interval error: ', x),
  }
);

timer(7000).subscribe(  {
  next: (x) => { cl$.unsubscribe(), console.log('timer next: ', x); },
  complete: () => console.log('timer complete: ' ),
  error: (x) => console.log('timer error: ', x),
})

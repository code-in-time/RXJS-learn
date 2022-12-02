import { Observable, of, from, fromEvent, timer, interval, take, map, forkJoin, combineLatest} from 'rxjs';
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

const obs1$ = timer(10000).pipe(map( () => 'obs1'));
const obs2$ = timer(2000).pipe(map( () => 'obs2'));
const obs3$ = timer(3000).pipe(map(() => 'obs3'));
// const obs4$ = timer(2000).pipe(map(() => { throw ('ttttttt'); 'obs3' }));
const obs4$ = interval(2000).pipe(map(() => 'obs4 interval' ));


/*
  combineLatest
  note take will make it complete after 3 returns
  if take was not here then it would never complete
*/
const combineLatest$ = combineLatest([obs1$, obs2$, obs3$, obs4$]).pipe(take(3)).subscribe({
  next: x => console.log('next', x),
  complete: () => console.log('complete'),
  error: (s) => console.log('error', s)
})

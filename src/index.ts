import { Observable, of, from, fromEvent, timer, interval, take} from 'rxjs';
import { ajax } from 'rxjs/ajax';
/*
  of
*/
// const of$ = of<number[]>([1, 2, 3, 4]);
// of$.subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete')
// })

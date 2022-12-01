import { Observable, of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
/*
  of
*/
// const of$ = of<number[]>([1, 2, 3, 4]);
// of$.subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete')
// })

// function myOf(arr : number[]): Observable<number[]> {
//   const obs$ = new Observable<number[]>(sub => {
//     sub.next(arr);
//     sub.complete()

//   })
//     return obs$;
// }

// myOf([2,4,5,6]).subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete')
// })

/*
  from
*/
// const myArr = ['a', 'v', 'b'];
// const from$ = from(myArr);

// from(myArr).subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete')
// })

// const promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });

// from(promise).subscribe({
//   next: x => console.log('next', x),
//   complete: () => console.log('complete')
// })



///////////////

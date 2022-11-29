import { Observable } from 'rxjs';

const someObservable$ = new Observable<number>(subscriber => {
  let count = 0;

  const countMe = () => {
    setTimeout(() => {
      count++;
      subscriber.next(count);

      if (count === 7) {
        subscriber.complete()
      } else {
        countMe();
      }

    }, 200);
  }

  // start counter
  countMe();

});


const t = someObservable$.subscribe({ next: value => console.log(value), complete: () => console.log('done') });
const ta = someObservable$.subscribe({ next: value => console.log(value), complete: () => console.log('done') });
// t.unsubscribe();

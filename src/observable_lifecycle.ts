import { Observable } from 'rxjs';
// Observable lifecycle
const someObservable$ = new Observable<string>(subscriber => {
  console.log('run')
  subscriber.next('Alice');
  subscriber.next('Ben')
  setTimeout(() => {
    subscriber.next('Charlie');
    // subscriber.complete();
    subscriber.error(new Error('vvvvvvvvvvvvvv'));
  }, 2000);

  return () => {
    // cleanup
    // Called after complete and error
    console.log('tear down')
  };
});

console.log('before')
const t = someObservable$.subscribe(
  {
    next: value => console.log('next: ', value),
    complete: () => console.log('complete'),
    error: (x) => console.log('error', x)
  }
);

console.log('after')

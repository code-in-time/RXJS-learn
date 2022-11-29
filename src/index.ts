import { Observable } from 'rxjs';

const obser$ = new Observable<string>(sub => {
  let count = 0;

  const intervalId = setInterval(() => {
    console.log('timer')
    // if (count === 4) {
    //   sub.complete();
    // }
    sub.next(`count ${count}`);
    count ++

  },1000);

  return () => { 
  // Teardown when subscription ends
    console.log('teardown');
    clearInterval(intervalId);
  }
})


const sub = obser$.subscribe({
  next: (x) => console.log('next', x),
  complete: () => console.log('completed'),
  error: (x) =>  console.log('error', x)
});

// Unsubscribe after 3 seconds
setTimeout(() => {
  sub.unsubscribe();
}, 3000);

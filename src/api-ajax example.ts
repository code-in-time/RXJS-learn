import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// https://random-data-api.com/
const URL = 'https://random-data-api.com/api/name/random_name'
const api$ = ajax<any>(URL);


api$.subscribe({
  next: (x) => console.log('next1', x.response.first_name)
})

api$.subscribe({
  next: (x) => console.log('next2', x.response.first_name)
})

api$.subscribe({
  next: (x) => console.log('next3', x.response.first_name)
})
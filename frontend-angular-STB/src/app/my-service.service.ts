import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  getData() {
    return 'Service Data';
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData() {
    return ['apple', 'banana', 'kiwi', 'papaya'];
  }
}

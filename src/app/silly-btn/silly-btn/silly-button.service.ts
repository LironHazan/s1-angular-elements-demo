import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SillyButtonService {

  constructor() { }

  ghostifyText() {
    return 'Chocolate';
  }
}

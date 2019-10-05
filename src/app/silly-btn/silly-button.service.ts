import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SillyButtonService {
  notifier: EventEmitter<any>;
  // just a poc to show that injectors will work when angular generates the custom elements for us
  constructor() {
    this.notifier = new EventEmitter();
    this.onSomething();
  }

  doSomething(val) {
    return this.notifier.next(val);
  }
  onSomething() {
    this.notifier.subscribe((val) => {
      console.log(val);
    });
  }
}

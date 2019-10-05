import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SillyButtonService} from './silly-button.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-silly-button',
  template:
    `<div class="silly-btn" (click)="onClick($event)">
        <div class="content">
          <ng-content></ng-content>
        </div>
        <button class="content" mat-button> {{ text }}  </button>
     </div>`,
  styleUrls: ['./silly-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SillyButtonComponent implements OnInit {
  @Input() text = 'Hell Yeahh!';
  constructor(private  sillyButtonService: SillyButtonService) { }

  ngOnInit() {
    console.log('connected callback');
  }

  onClick(evt) {
    this.sillyButtonService.doSomething('foo');
  }

}

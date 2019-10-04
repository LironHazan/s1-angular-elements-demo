import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SillyButtonService} from './silly-button.service';

@Component({
  selector: 'app-silly-button',
  template: `<div #btnLayout>
    <div> {{ text }} </div>
    <ng-content> </ng-content>
  </div>`,
  styleUrls: ['./silly-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SillyButtonComponent implements OnInit, AfterViewInit {

  @ViewChild('btnLayout', { static: false })
  btnLayoutElement: ElementRef;
  btnLayoutColor;
  @Input() text = 'Hell Yeahh!';
  constructor(private  sillyButtonService: SillyButtonService) { }

  ngOnInit() {
    this.btnLayoutColor = this.sillyButtonService.ghostifyText();
  }

  ngAfterViewInit(): void {
    this.btnLayoutElement.nativeElement.style.backgroundColor = this.btnLayoutColor ;
  }

}

import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss']
})
export class ScrollContainerComponent implements OnInit {

  @Input()
  public height: string;

  constructor() { }

  ngOnInit() {
  }

}

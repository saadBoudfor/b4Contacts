import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'cm-button',
  templateUrl: './cm-button.component.html',
  styleUrls: ['./cm-button.component.scss']
})
export class CmButtonComponent implements OnInit {

  @Output()
  public buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.buttonClick.emit();
  }

}

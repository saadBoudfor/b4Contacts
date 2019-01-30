import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'avatar-header',
  templateUrl: './avatar-header.component.html',
  styleUrls: ['./avatar-header.component.scss']
})
export class AvatarHeaderComponent implements OnInit {

  @Input()
  public initial: string;

  @Input()
  public formattedName: string;

  @Output()
  public onBackClick= new EventEmitter();

  @Output()
  public onUpdateClick= new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  backClickedEvent() {
    this.onBackClick.emit();
  }

  updateClickedEvent() {
    this.onUpdateClick.emit();
  }

}

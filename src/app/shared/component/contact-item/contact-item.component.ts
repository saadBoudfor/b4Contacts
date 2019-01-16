import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list-view-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ListViewItemComponent {
  @Input()
  public swipeToLeft: boolean = false;

  @Input()
  public content: string = 'Boudfor Saâd';

  @Input()
  public icon: string = 'BD';

  @Input()
  public actions: Action[] = [{icon: 'edit', name: 'edit', color: '#ddd'}];

  @Output()
  public actionClickedEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public itemClickedEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public itemDbClickedEvent: EventEmitter<any> = new EventEmitter<any>();

  onSwipeLeft(evt) {
    this.swipeToLeft = true;
  }


  onSwipeRight(evt) {
    this.swipeToLeft = false;
  }

  onActionClick(action) {
    this.actionClickedEvent.emit(action);
  }

  onItemClick() {
    this.itemClickedEvent.emit();
  }

  onItemDbClick() {
    this.itemDbClickedEvent.emit();
  }

}

interface Action {
  icon?: string;
  name?: string;
  color?: string;
}

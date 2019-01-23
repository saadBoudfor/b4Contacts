import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Action} from "../../../services/models/Action";

@Component({
  selector: 'list-view-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ListViewItemComponent implements OnInit{
  static ColorID = 0;
  @Input()
  public swipeToLeft: boolean = false;

  @Input()
  public content: string = 'Boudfor Saâd';

  @Input()
  public icon: string;

  @Input()
  public actions: Action[] = [{icon: 'edit', name: 'edit', color: '#ddd'}];

  @Output()
  public actionClickedEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public itemClickedEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public itemDbClickedEvent: EventEmitter<any> = new EventEmitter<any>();

  public color: string;

  ngOnInit(): void {
    this.color = this.getRandomColor();
  }

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
  getRandomColor(): string {
    const colors = ["#8fafc4", "#336a86", "#293132", "#753625"];
    return colors[ListViewItemComponent.ColorID++%(colors.length)];
  }
}


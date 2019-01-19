import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  @Output() searchChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.searchChanged.emit(event.target.value);
  }

}

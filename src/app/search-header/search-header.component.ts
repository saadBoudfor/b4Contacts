import {Component, OnInit} from '@angular/core';
import {CordovaService} from "../services/cordova.service";

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  constructor(public cordovaService: CordovaService) {
  }

  ngOnInit() {
  }

  getSearchString(value) {
    this.cordovaService.searchString.next(value);
  }

}

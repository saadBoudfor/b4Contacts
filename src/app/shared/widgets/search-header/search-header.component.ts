import {Component, OnInit} from '@angular/core';
import {CordovaService} from "../../../services/handlers/cordova.service";
import {CoreService} from "../../../services/handlers/core.service";

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getSearchString(value) {
    CoreService.searchString.next(value);
  }

}

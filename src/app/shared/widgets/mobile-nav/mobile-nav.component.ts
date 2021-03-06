import { Component, OnInit } from '@angular/core';
import {ModalHandlerService} from "../../../services/handlers/modal-handler.service";

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  constructor(private modalHandler: ModalHandlerService) { }

  ngOnInit() {
  }

  functionNotSupported() {
    this.modalHandler.showModal();
  }

}

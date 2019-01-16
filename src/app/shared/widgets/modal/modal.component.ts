import {Component, OnInit} from '@angular/core';
import {ModalHandlerService} from "../../../modal-handler.service";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalHandler: ModalHandlerService) {
  }

  ngOnInit() {
  }

  cancel() {
    this.modalHandler.hideModal();
  }

}

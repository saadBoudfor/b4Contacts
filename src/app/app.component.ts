import {Component, OnInit} from '@angular/core';
import {ModalHandlerService} from "./services/handlers/modal-handler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showModal: boolean;

  constructor(private modalHandler: ModalHandlerService) {
    this.modalHandler.init();
  }

  ngOnInit(): void {
    this.modalHandler.ModalOptions.subscribe((option) => {
      this.showModal = option.show;
    });
  }

}

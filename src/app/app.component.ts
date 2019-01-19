import {Component, OnInit} from '@angular/core';
import {ModalHandlerService} from "./services/modal-handler.service";
import {CordovaService} from "./services/cordova.service";
import {ContacthandlerService} from "./services/contacthandler.service";
import {Contact} from "./Models/Contact";
import {Action} from "./shared/component/contact-item/contact-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showModal: boolean;
  public contactList: Array<Contact>;
  public actions: Array<Action> = [
    {icon: 'phone', name: 'call', color: 'green'},
    {icon: 'eye ', name: 'see', color: 'green'},
    {icon: 'edit', name: 'modify', color: 'green'}
  ];

  constructor(private modalHandler: ModalHandlerService) {
    this.modalHandler.init();
  }

  ngOnInit(): void {
    this.modalHandler.ModalOptions.subscribe((option) => {
      this.showModal = option.show;
    });
  }

}

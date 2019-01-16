import {Component, OnInit} from '@angular/core';
import {ModalHandlerService} from "./services/modal-handler.service";
import {CordovaService} from "./services/cordova.service";
import {ContacthandlerService} from "./services/contacthandler.service";
import {Contact} from "./Models/Contact";
import {Action} from "rxjs/internal/scheduler/Action";

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

  constructor(private modalHandler: ModalHandlerService,
              private cordovaHandler: CordovaService,
              public contactHandler: ContacthandlerService) {
    this.modalHandler.init();
    this.contactList = cordovaHandler.getContacts(null);
  }

  onClick(action) {
    alert(action + 'clicked!');
  }

  onContactClick() {
    alert('contact clicked!');
  }

  onContactDbClick() {
    alert('contact double click !');
  }

  ngOnInit(): void {
    this.modalHandler.ModalOptions.subscribe((option) => {
      this.showModal = option.show;
    });
  }

}

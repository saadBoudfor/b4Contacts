import { Component, OnInit } from '@angular/core';
import {ContacthandlerService} from "../../../services/contacthandler.service";
import {CordovaService} from "../../../services/cordova.service";
import {Action} from "../../component/contact-item/contact-item.component";
import {Contact} from "../../../Models/Contact";

@Component({
  selector: 'contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  public contactList: Array<Contact>;
  public actions: Array<Action> = [
    {icon: 'phone', name: 'call', color: 'green'},
    {icon: 'eye ', name: 'see', color: 'green'},
    {icon: 'edit', name: 'modify', color: 'green'}
  ];
  constructor(private cordovaHandler: CordovaService,
              public contactHandler: ContacthandlerService) { }

  ngOnInit() {
    this.contactList = this.cordovaHandler.getContacts(null);
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

}

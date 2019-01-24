import {Component, OnInit, Input} from '@angular/core';
import {CordovaService} from "../../../services/handlers/cordova.service";
import {ContactHandlerService} from "../../../services/handlers/contacthandler.service";
import {Contact} from "../../../services/models/Contact";

@Component({
  selector: 'contact-detail-screen',
  templateUrl: './contact-detail-screen.component.html',
  styleUrls: ['./contact-detail-screen.component.scss']
})
export class ContactDetailScreenComponent implements OnInit {

  @Input()
  public contactID: string;

  public contact: Contact;

  constructor(public _contactHandler: ContactHandlerService) { }

  ngOnInit() {
    console.log(this.contactID);
    this.contact = this
      ._contactHandler
      .contacts
      .getValue()
      .filter(contact => contact.id === this.contactID)[0];
  }

}

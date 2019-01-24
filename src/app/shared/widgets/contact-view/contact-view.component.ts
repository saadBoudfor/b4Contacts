import {Component, OnInit} from '@angular/core';
import {ContactHandlerService} from "../../../services/handlers/contacthandler.service";
import {CordovaService} from "../../../services/handlers/cordova.service";
import {Action} from "../../../services/models/Action";
import {Contact} from "../../../services/models/Contact";
import {CoreService} from "../../../services/handlers/core.service";

@Component({
  selector: 'contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  public contactListSearching: Array<Contact>;
  public contactList: Array<Contact>;
  public isSearching = false;
  public actions: Array<Action> = [
    {icon: 'phone', name: 'call', color: 'green'},
    {icon: 'eye ', name: 'see', color: 'green'},
    {icon: 'edit', name: 'modify', color: 'green'}
  ];

  constructor(public contactHandler: ContactHandlerService) {
  }

  ngOnInit() {
    CoreService.searchString.subscribe(searchString => {
      this.contactHandler.contacts.subscribe((contacts) => {
        if (searchString === '') {
          this.isSearching = false;
          this.contactList = contacts;
        } else {
          this.isSearching = true;
          this.contactListSearching = contacts.filter(this.contactHandler.filterBySearchString(searchString));
        }
      });
    });
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

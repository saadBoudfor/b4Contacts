import {Component, OnInit, HostListener} from '@angular/core';
import {ContactHandlerService} from "../../../services/handlers/contacthandler.service";
import {Action} from "../../../services/models/Action";
import {Contact} from "../../../services/models/Contact";
import {CoreService} from "../../../services/handlers/core.service";
import {ListViewAdapter} from "./ListViewAdapter";

@Component({
  selector: 'contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  public contactList: Array<Contact>;
  public contactWrapper: ListViewAdapter;
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
        const searchResult = contacts.filter(this.contactHandler.filterBySearchString(searchString));
        if (searchString === '') {
          searchResult = contacts;
        }
        this.contactWrapper = new ListViewAdapter(searchResult, 12);
        this.contactList = this.contactWrapper.nextElement;
      });
    });
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      if (this.contactWrapper.hasNext) {
        this.contactList = this.contactWrapper.nextElement;
      }
    }
  }

  onClick(action) {
    alert(action + 'clicked!');
  }

  onContactClick(contactID: string) {
    CoreService.goTo(CoreService.components.contact_details, contactID);
  }

}

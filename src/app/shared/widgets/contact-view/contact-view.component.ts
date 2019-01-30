import {Component, OnInit} from '@angular/core';
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
        let searchResult = contacts.filter(this.contactHandler.filterBySearchString(searchString));
        if (searchString === '') {
          searchResult = contacts;
        }
        this.contactWrapper = new ListViewAdapter(searchResult, 15);
        this.contactList = this.contactWrapper.nextElement;
      });
    });

    /**
     * TODO: (before commit)
     *  - compute dynamically how much contact element can be displayed in a scroll container.
     *  - test result on mobile device.
     *  - move this code inside a separated function ?
     * @type {HTMLElement|any}
     */
    const scrollContainerElement = document.getElementById('scroll-container');
    scrollContainerElement.addEventListener('scroll', () => {
      if ((scrollContainerElement.offsetHeight + scrollContainerElement.scrollHeight) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        if (this.contactWrapper.hasNext) {
          this.contactList = this.contactWrapper.nextElement;
        }
      }
    })
  }

  onClick(action) {
    alert(action + 'clicked!');
  }

  onContactClick(contactID: string) {
    CoreService.goTo(CoreService.components.contact_details, contactID);
  }

}

import {Injectable} from '@angular/core';
import {Contact} from "../models/Contact";
import {ContactsMock} from "../mocks/ContactsMock";
import {BehaviorSubject} from "rxjs";
import {CoreService} from "./core.service";

@Injectable({
  providedIn: 'root'
})
export class ContactHandlerService {

  public _contacts = new BehaviorSubject<Array<Contact>>([]);

  constructor() {
    this._contacts.next(ContactsMock.contacts)
  }

  getDisplayName(contact: Contact): string {
    let displayName = '';
    if (contact.name && contact.name.formatted) {
      displayName = contact.name.formatted;
    } else if (CoreService.fieldNotNull(contact.emails)) {
      displayName = contact.emails[0];
    } else {
      displayName = contact.phoneNumbers[0];
    }
    return displayName;
  }

  getInitial(contact: Contact): string {
    let initial = '';
    if (contact.name && contact.name.formatted) {
      initial = contact.name.formatted.charAt(0).toUpperCase();
    }
    return initial
  }

  public get contacts(): BehaviorSubject<Array<Contact>> {
    return this._contacts;
  }

  filterBySearchString(searchString: string) {
    return (contact: Contact) => {
      return this.getDisplayName(contact)
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1;
    }
  }
}

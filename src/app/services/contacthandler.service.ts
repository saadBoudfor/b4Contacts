import {Injectable} from '@angular/core';
import {Contact} from "../Models/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContacthandlerService {

  constructor() {
  }

  getFullName(contact: Contact): string {
    return contact.firstName + ' ' + contact.lastName;
  }

  getInitial(contact: Contact): string {
    return contact.firstName.charAt(0).toUpperCase()
      + contact.lastName.charAt(0).toUpperCase();
  }
}

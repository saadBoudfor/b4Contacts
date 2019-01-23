import {Injectable} from '@angular/core';
import {ContactHandlerService} from "./contacthandler.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class CordovaService {

  public searchString = new BehaviorSubject('');
  private DEViCE_READY_EVENT = 'deviceready';
  private _navigator = window.navigator;
  public contacts = new BehaviorSubject([]);

  constructor(public contactHandler: ContactHandlerService) {
  }

  init() {
    this.updateContacts((contacts) => {
      console.log('contacts ! reader ');
      this.contacts.next(contacts);
    })
  }

  updateContacts(readContactCallBack) {
      document.addEventListener(this.DEViCE_READY_EVENT, () => {
        const contactPlugin: any = this._navigator['contacts'];
        const searchedFields: any = [
          contactPlugin.fieldType.displayName,
          contactPlugin.fieldType.name,
          contactPlugin.fieldType.nickname,
          contactPlugin.fieldType.emails,
          contactPlugin.fieldType.phoneNumbers
        ];
        contactPlugin.find(searchedFields, (contacts) => {
          console.log(contacts);
          readContactCallBack(contacts.filter(CordovaService.contactFilter));
        }, (error) => {
          console.error('error get contacts')
        }, {filter: "", multiple: true})

      }, false);
  }


  static contactFilter(contact: any) {
    return CordovaService.fieldNotNull(contact.displayName)
      || contact.name
      || this.fieldNotNull(contact.nickname)
      || this.fieldNotNull(contact.emails)
      || this.fieldNotNull(contact.phoneNumbers)
  }

  static fieldNotNull(field: any) {
    return field && field.length != 0;
  }

  get ContactsList(): BehaviorSubject<any> {
    return this.contacts;
  }

}

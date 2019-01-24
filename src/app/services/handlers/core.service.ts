import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  static components: any = {
    contacts_list: 'contacts_list',
    contact_details: 'contact_details'
  };

  constructor() {
  }

  static searchString = new BehaviorSubject<string>('');
  static currentPage = new BehaviorSubject<string>(CoreService.components.contacts_list);

  static fieldNotNull(field: any) {
    return field && field.length != 0;
  }
}

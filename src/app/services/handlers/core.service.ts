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
  static currentPage = new BehaviorSubject<any>({
    id: CoreService.components.contacts_list,
    params: null
  });

  static goTo(pageID, params = null) {
    this.currentPage.next({id: pageID, params: params})
  }
  static fieldNotNull(field: any) {
    return field && field.length != 0;
  }
}

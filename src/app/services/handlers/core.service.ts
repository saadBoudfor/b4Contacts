import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  static searchString = new BehaviorSubject<string>('');

  static fieldNotNull(field: any) {
    return field && field.length != 0;
  }

}

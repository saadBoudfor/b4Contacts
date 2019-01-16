import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalHandlerService {
  private modalOptions = new BehaviorSubject<ModalOption>(null);

  constructor() { }

  showModal() {
   const current = this.modalOptions.getValue() as ModalOption;
   current.show = true;
   this.modalOptions.next(current);
  }

  hideModal() {
    const current = this.modalOptions.getValue() as ModalOption;
    current.show = false;
    this.modalOptions.next(current);
  }

  init() {
    this.modalOptions.next({show: false});
  }

  get ModalOptions(): BehaviorSubject<ModalOption> {
    return this.modalOptions;
  }
}

interface ModalOption {
  show?: boolean;
}

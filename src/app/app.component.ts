import {Component, OnInit} from '@angular/core';
import {ModalHandlerService} from "./modal-handler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showModal: boolean;

  constructor(private modalHandler: ModalHandlerService) {
    this.modalHandler.init();
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

  ngOnInit(): void {
    this.modalHandler.ModalOptions.subscribe((option)=>{
        this.showModal = option.show;
    });
  }

}

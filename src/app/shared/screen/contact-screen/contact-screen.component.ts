import { Component, OnInit } from '@angular/core';
import {CordovaService} from "../../../services/handlers/cordova.service";

@Component({
  selector: 'contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {

  constructor(private cordovaService: CordovaService) { }

  ngOnInit() {
    this.cordovaService.init();
  }

}

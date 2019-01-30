import {Component, OnInit, Input} from '@angular/core';
import {CordovaService} from "../../../services/handlers/cordova.service";
import {ContactHandlerService} from "../../../services/handlers/contacthandler.service";
import {Contact} from "../../../services/models/Contact";
import * as L from 'leaflet';
import {HttpClient} from "@angular/common/http";
import {CoreService} from "../../../services/handlers/core.service";

@Component({
  selector: 'contact-detail-screen',
  templateUrl: './contact-detail-screen.component.html',
  styleUrls: ['./contact-detail-screen.component.scss']
})
export class ContactDetailScreenComponent implements OnInit {

  @Input()
  public contactID: string;

  public contact: Contact;

  constructor(public _contactHandler: ContactHandlerService, public http: HttpClient) {
  }

  ngOnInit() {
    console.log(this.contactID);
    this.contact = this
      ._contactHandler
      .contacts
      .getValue()
      .filter(contact => contact.id === this.contactID)[0];
    const myfrugalmap = L.map('frugalmap');
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });


    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
      const podotactile = data.records[0];
      L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(myfrugalmap);
      myfrugalmap.setView([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], 17);

    });
  }

  backToContactsView() {
    CoreService.currentPage.next({id: CoreService.components.contacts_list, params: null})
  }

}

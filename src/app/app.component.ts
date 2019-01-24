import {Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';
import {ModalHandlerService} from "./services/handlers/modal-handler.service";
import {CoreService} from "./services/handlers/core.service";
import {ContactScreenComponent} from "./shared/screen/contact-screen/contact-screen.component";
import {ContactDetailScreenComponent} from "./shared/screen/contact-detail-screen/contact-detail-screen.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showModal: boolean;
  public _componentMapper = new Map();

  @ViewChild('container', {read: ViewContainerRef})
  private _container: ViewContainerRef;

  constructor(private modalHandler: ModalHandlerService, private resolver: ComponentFactoryResolver) {
    this.modalHandler.init();
    this._componentMapper.set(CoreService.components.contacts_list, ContactScreenComponent);
    this._componentMapper.set(CoreService.components.contact_details, ContactDetailScreenComponent);
  }

  ngOnInit(): void {
    this._container.clear();
    CoreService.currentPage.subscribe(currentPage => {
      this
        ._container
        .createComponent(this.resolver.resolveComponentFactory(this._componentMapper.get(currentPage)));

    });
    this.modalHandler.ModalOptions.subscribe((option) => {
      this.showModal = option.show;
    });
  }

}

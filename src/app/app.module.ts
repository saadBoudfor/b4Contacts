import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ListViewItemComponent } from './shared/component/contact-item/contact-item.component';
import { SearchComponentComponent } from './shared/component/search-component/search-component.component';
import { MobileNavComponent } from './shared/widgets/mobile-nav/mobile-nav.component';
import { ModalComponent } from './shared/widgets/modal/modal.component';
import {ContactViewComponent} from "./shared/widgets/contact-view/contact-view.component";
import {SearchHeaderComponent} from "./shared/widgets/search-header/search-header.component";
import {HammerConf} from "./services/conf/HammerConf";
import { ContactScreenComponent } from './shared/screen/contact-screen/contact-screen.component';
import { ContactDetailScreenComponent } from './shared/screen/contact-detail-screen/contact-detail-screen.component';
import {HttpClientModule} from "@angular/common/http";
import { CmButtonComponent } from './shared/component/cm-button/cm-button.component';
import { ScrollContainerComponent } from './shared/component/scroll-container/scroll-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewItemComponent,
    SearchComponentComponent,
    MobileNavComponent,
    ModalComponent,
    ContactViewComponent,
    SearchHeaderComponent,
    ContactScreenComponent,
    ContactDetailScreenComponent,
    CmButtonComponent,
    ScrollContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [        {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConf
  }],
  bootstrap: [AppComponent],
  entryComponents: [ContactScreenComponent, ContactDetailScreenComponent]
})
export class AppModule { }

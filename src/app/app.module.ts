import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ListViewItemComponent } from './shared/component/contact-item/contact-item.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MobileNavComponent } from './shared/widgets/mobile-nav/mobile-nav.component';
import { ModalComponent } from './shared/widgets/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewItemComponent,
    SearchComponentComponent,
    MobileNavComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

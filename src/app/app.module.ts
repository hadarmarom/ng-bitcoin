import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinList } from './cmps/bitcoin-list/bitcoin-list.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { BitcoinPreviewComponent } from './cmps/bitcoin-preview/bitcoin-preview.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinList,
    BitcoinAppComponent,
    BitcoinPreviewComponent,
    UserProfileComponent,
    ContactDetailsComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

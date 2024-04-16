import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPopupComponent } from './shared/modal-popup/modal-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
// import { NgxSelectModule } from 'ngx-select-ex';
import { PinsModule } from './pins/pins.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomersModule,
    PinsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }

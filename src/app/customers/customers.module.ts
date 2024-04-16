import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';



@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    // NgxSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CustomerFormComponent,
    CustomerListComponent],
  providers: [HttpService]
})
export class CustomersModule { }

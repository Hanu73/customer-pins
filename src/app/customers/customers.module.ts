import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
// import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';



@NgModule({
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    // NgxSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CustomerFormComponent],
  providers: [HttpService]
})
export class CustomersModule { }

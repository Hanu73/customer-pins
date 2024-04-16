import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinFormComponent } from './pin-form/pin-form.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PinFormComponent,
    PinListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PinFormComponent]
})
export class PinsModule { }

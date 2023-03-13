import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientComponent } from './form-client/form-client.component';

@NgModule({
  declarations: [FormClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormClientComponent]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//? botones
import {ButtonModule} from 'primeng/button';

//? navbar
import {MenubarModule} from 'primeng/menubar';

//? forms
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }

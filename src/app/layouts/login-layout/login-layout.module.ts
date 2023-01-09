import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzButtonModule,
    FormsModule,
  ]
})
export class LoginLayoutModule { }

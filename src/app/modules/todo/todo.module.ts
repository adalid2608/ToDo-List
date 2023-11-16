import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TodoModule { }

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  fTask : FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(5)]]
  })

  constructor (
    private fb: FormBuilder 
  ){}

  saveTask() : void {
    console.log(this.fTask.value);
  }
}

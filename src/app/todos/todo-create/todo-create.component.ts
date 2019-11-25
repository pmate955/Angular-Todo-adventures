import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  submitted = false;
  todoForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private todoService: TodoApiService) { }

  ngOnInit() {
    this.mainForm();
  }

  mainForm() {
    this.todoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  get myForm() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.todoForm.valid) {
      return false;
    } else {
      this.todoService.createTodo(this.todoForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/todos'))
        }, (error) => {
          console.log(error);
        }
      );
    }
  }

}

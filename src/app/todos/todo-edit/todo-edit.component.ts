import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  todos: Todo[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private todoService: TodoApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateTodo();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTodo(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTodo(id) {
    this.todoService.getTodo(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        description: data['description']
      });
    });
  }

  updateTodo() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.todoService.updateTodo(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/todos');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}

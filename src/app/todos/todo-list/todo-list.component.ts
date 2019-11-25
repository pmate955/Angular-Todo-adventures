import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoApiService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    })
  }

  deleteTodo(todo, index) {
    if(window.confirm('Are you sure?')) {
      this.todoService.deleteTodo(todo.id).subscribe((data) => {
        this.todos.splice(index, 1);
      })
    }
  }

}

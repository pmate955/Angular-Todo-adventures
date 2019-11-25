import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCreateComponent } from './todos/todo-create/todo-create.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TodoApiService } from './todos/todo-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';

const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos'},
  { path: 'todos', component: TodoListComponent},
  { path: 'todos/edit/:id', component: TodoEditComponent },
  { path: 'todos/add', component: TodoCreateComponent }
]

@NgModule({ 
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoEditComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodoCreateComponent } from './todos/todo-create/todo-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos'},
  { path: 'todos', component: TodoListComponent},
  { path: 'todos/edit/:id', component: TodoEditComponent },
  { path: 'todos/add', component: TodoCreateComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
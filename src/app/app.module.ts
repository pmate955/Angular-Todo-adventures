import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCreateComponent } from './todos/todo-create/todo-create.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoApiService } from './todos/todo-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({ 
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

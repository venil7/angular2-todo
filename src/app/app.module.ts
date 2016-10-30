import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';

import { TodoService } from './services/app.todo.service';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'edit/:id', component: TodoEditorComponent },
      { path: '', component: TodoListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoSummaryComponent,
    TodoEditorComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

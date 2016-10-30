import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { TodoItem } from './../models/todo';
import { TodoService } from '../services/app.todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoService: TodoService;
  items: TodoItem[];

  constructor(todoService: TodoService, private cd: ChangeDetectorRef) {
    this.todoService = todoService;
    this.items = todoService.getItems();
  }

  ngOnInit() { }

}

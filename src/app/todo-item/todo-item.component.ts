import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './../models/todo';
import { TodoService } from '../services/app.todo.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input()
    item: TodoItem;
    @Output()
    toggle = new EventEmitter<TodoItem>();

    constructor(private todoService: TodoService) { }
    ngOnInit() { }

    clickHandler($event) {
        const updatedItem = this.todoService.toggleItem(this.item);
        this.toggle.emit(updatedItem);
    }

}

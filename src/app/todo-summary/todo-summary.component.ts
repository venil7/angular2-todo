import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todo';
import { TodoService } from '../services/app.todo.service';

@Component({
    selector: 'app-todo-summary',
    templateUrl: './todo-summary.component.html',
    styleUrls: ['./todo-summary.component.css'],
})
export class TodoSummaryComponent implements OnInit {

    items: TodoItem[];
    done: number;
    todo: number;
    total: number;

    constructor(private todoService: TodoService) { }

    updateValues(items: TodoItem[]) {
        this.done = items.filter(x => x.done).length;
        this.todo = items.filter(x => !x.done).length;
        this.total = items.length;
    }

    ngOnInit() {
        this.updateValues(this.todoService.getItems());
        this.todoService.itemsChanged.subscribe((items) => {
            this.updateValues(items);
        });
    }

}

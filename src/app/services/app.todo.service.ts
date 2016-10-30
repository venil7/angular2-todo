import { TodoItem } from './../models/todo';
import { EventEmitter } from '@angular/core';

const uuid = require('node-uuid');

export class TodoService {
  private _items: TodoItem[];
  itemsChanged: EventEmitter<TodoItem[]>;

  constructor() {
    this.itemsChanged = new EventEmitter<TodoItem[]>();
    this.loadItems();
  }

  getItems() {
    return this._items.slice(0);
  }

  saveItems() {
    localStorage.setItem("todo-app-items", JSON.stringify(this.getItems()))
  }

  loadItems() {
    const json = localStorage.getItem("todo-app-items");
    this._items = JSON.parse(json);
  }

  toggleItem(newItem: TodoItem) {
    let item = this._items.find(x => x.id === newItem.id);
    item.done = !item.done;
    this.itemsChanged.emit(this.getItems());
    this.saveItems();
    return item;
  }

  get done(): number {
    return this._items.filter(x => x.done).length;
  }

  get todo(): number {
    return this._items.filter(x => !x.done).length;
  }

  get total(): number {
    return this._items.length;
  }

}
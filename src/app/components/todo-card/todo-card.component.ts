import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  todoItems: Todo[] = [new Todo(false, 'Koffie halen')];

  public addTodo(value: string) {
    this.todoItems.push(new Todo(false, value));
    console.log('Todo item added');
  }
}

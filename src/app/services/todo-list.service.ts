import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
    private todoList: TodoItem[] = [  {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  addItem(title: string) {    
    this.todoList.push({ title });
    
  }
  getTodoList() {
    return this.todoList;}
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>

  constructor() {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTodos();
    }, 3000);
    
  }

  getTodos(): void{
    this.todoList = todos;
    }
}


const todos = [
  {
    id: 1,
    title: 'Angular',
    description: '',
    isDone: false
  },
  {
    id: 2,
    title: 'JavaScript1',
    description: 'Test Description',
    isDone: true
  }
]
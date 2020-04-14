import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>

  constructor(
    private todoService: TodoService
  ) {
    
   }

  ngOnInit(): void {
      this.getTodos();
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
    .subscribe(() => {
      this.getTodos();
    });
  }
  
  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
    .subscribe(() => {
      this.getTodos();
    });
  }
  
  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo)
    .subscribe(() => {
      this.getTodos();
    });
    
  }

  private getTodos(): void{
    this.todoService.getTodos()
    .subscribe(data => {
      this.todoList = data;
      // console.log(data)
    },
    error =>{
      console.log(error);
    }
    );

    }

}



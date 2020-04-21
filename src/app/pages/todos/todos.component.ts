import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>
  search: string;
  filterPrority:string;

  private unsubscribe = new Subject;

  constructor(
    private todoService: TodoService
  ) {
    
   }

  ngOnInit(): void {
      this.getTodos();
  }
  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTodos();
    });
  }
  
  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTodos();
    });
  }
  
  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo)
    .pipe(takeUntil(this.unsubscribe))
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



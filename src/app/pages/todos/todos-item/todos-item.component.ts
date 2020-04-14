import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();

  isShowDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.update.emit(this.todo)
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toogleDetails(): void{
    this.isShowDetails =!this.isShowDetails;
  }

  
  
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  @Input() modalRef: BsModalRef

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  toogleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.updateTodo(this.todo)
  }

  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }

  toogleDetails(): void{
    this.isShowDetails =!this.isShowDetails;
  }

  updateTodo(todo: Todo): void {
    this.update.emit(todo)
  }

  openModal() {
    this.modalRef = this.modalService.show(
      NewTodoComponent,
      Object.assign({},  {
        ignoreBackdropClick: true,
        initialState: {
          todoData: this.todo,
          submit: this.updateTodo.bind(this)

        }
      }) 
    );
  }

  

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from 'src/app/core/interfaces';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() newTodo = new EventEmitter<Todo>();
  
  newTodoForm: FormGroup;
  isSubmit = false;
  todoData: Todo;

  constructor(
    private fb: FormBuilder,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.createNewTodoForm();
    // console.log(this.todoData)
  }

  onSubmit(): void {
    this.isSubmit = true;
    if (this.newTodoForm.invalid) {
      return;
    }
    this.newTodo.emit(this.newTodoForm.value)

    this.submit(this.newTodoForm.value);
    
    // console.log(this.newTodoForm.value)
    this.newTodoForm.reset();
    this.isSubmit = false;
    this.hideModal();
  }

  hideModal() {
    this.modalRef.hide() 
  }

  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({

      id: [
        this.todoData ? this.todoData.id  : null,
      ],

      title: [
        this.todoData ? this.todoData.title  : '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      description: [
        this.todoData ? this.todoData.description  : '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      isDone: [
      this.todoData ? this.todoData.isDone : false
      ],
      priority: [
        this.todoData ? this.todoData.priority : '',
        Validators.required
      ]
      
    })
  } 

  submit(todo: Todo): void {

  }

}

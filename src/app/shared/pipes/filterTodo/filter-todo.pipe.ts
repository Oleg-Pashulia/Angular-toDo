import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(data: any, filterPriority: string): any {
    if(!filterPriority) {
      return data;
    }
  
    return data.filter((element: Todo) => {
      return element.priority.indexOf(filterPriority) > -1; 
    });

    return data;
  }
  
}

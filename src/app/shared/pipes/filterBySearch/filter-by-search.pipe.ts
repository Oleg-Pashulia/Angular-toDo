import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search:string): any {
   if(!search){
     return data;
   }

   return data.filter((element: Todo) => {
    return element.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    // if(element.title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
    //   return true;
    // } else {
    //   return false;
    // }
  });
   
   return data;
  }
}

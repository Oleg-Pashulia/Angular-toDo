import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  headerTitle = 'Angular to Do'
  headerSubTitle = 'Educational project for study Angular' 

  testOutputApp(data: string): void {
    console.log(data)
  }


    
}

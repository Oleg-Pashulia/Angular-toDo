import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string; 
  @Input() subTitle: string;
  // title = 'Angular to'
  @Output() testOutput = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  

  log():void{
    console.log('login')
    this.testOutput.emit('Header login works')
  }
}

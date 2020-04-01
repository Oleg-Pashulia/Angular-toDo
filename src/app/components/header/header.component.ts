import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string; 
  @Input() subTitle: string;
  // title = 'Angular to'
  isLogined = false;

  constructor() { }

  ngOnInit(): void {
  }

  login():void{
    this.isLogined =!this.isLogined
    console.log('LogIn')
  }
}

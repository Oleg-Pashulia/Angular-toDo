import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users.interface';
import { UsersService } from 'src/app/core/services/users/users.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  userList: Array<Users>
  @Input() user: Users;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.usersService.getUsers()
    .subscribe(data => {
      this.userList = data;
      // console.log(data)
    },
    error =>{
      console.log(error);
    }
    );
  }

  // getUser(todoId: number): void {
  //   this.usersService.getUser(todoId)
  //   .subscribe(() =>{
  //     this.getUsers();
  //   });
  // }
  
}

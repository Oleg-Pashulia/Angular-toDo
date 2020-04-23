import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Users } from 'src/app/core/interfaces/users.interface';
import { UsersService } from 'src/app/core/services/users/users.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number; //undefined
  user: Users; //und
  
  

  private unsubscribe = new Subject();

  constructor(
    private activatedRuote: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
   this.getUserId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activatedRuote.params
    .pipe(takeUntil(this.unsubscribe)) //arg
    .subscribe(params => {
        // console.log(params)
        this.userId = params.userId;
        this.getUser(this.userId);
      }
    );
  }

  getUser(userId: number): void {
    this.usersService.getUser(userId)
    .subscribe(user=>{
      this.user = user;  
    });
  }


  // private getUsers(): void {
  //   this.usersService.getUsers()
  //   .subscribe(data => {
  //     this.userList = data;
  //   });
  // }

}

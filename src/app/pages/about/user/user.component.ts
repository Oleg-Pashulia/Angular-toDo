import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Users } from 'src/app/core/interfaces/users.interface';
import { UsersService } from 'src/app/core/services/users/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number;
  user: Users;
  userList: Array<Users>

  private unsubscribe = new Subject();

  constructor(
    private activatedRuote: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
   this.getUserId();
   this.getUsers();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activatedRuote.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        // console.log(params)
        this.userId = params.userId;
      }
    );
  }

  getUsers(): void {
    this.usersService.getUsers()
    .subscribe(data => {
      this.userList = data;
    });
  }

}

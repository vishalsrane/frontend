import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public user: User = new User();
  
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers()
                     .subscribe(data =>this.users = data, error => console.log(error));
  }

  createUser(){
    console.log('inside createUser');
    this.userService.createUser(this.user)
                    .subscribe(data =>this.user = data, error => console.log(error));
    this.users.unshift(this.user);
 }


}

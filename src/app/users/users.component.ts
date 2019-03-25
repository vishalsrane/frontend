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
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers()
                     .subscribe(data =>this.users = data,
                                error => console.log(error));
  }

  loginUser(event){
    console.log('inside loginUser');
    console.log(event);
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#formName').value
    const password = target.querySelector('#formAssociateId').value
    console.log(username + ' ' + password)
  }


}

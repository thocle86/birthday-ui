import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

}

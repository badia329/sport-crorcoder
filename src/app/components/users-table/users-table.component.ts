import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css',
})
export class UsersTableComponent {
  constructor(private userServer: UserService, private router: Router) {}
  usersTab: any = [];
  ngOnInit(){
    this.userServer.getAllUsers().subscribe((data) => {
      console.log("Here is users from BE", data);
      this.usersTab = data.tab;
    })
  }
  goToInfo(userId: string){
    this.router.navigate(['profile/' + userId])
  }
}

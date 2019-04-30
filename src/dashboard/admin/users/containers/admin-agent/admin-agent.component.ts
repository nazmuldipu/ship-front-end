import { Component, OnInit } from '@angular/core';
import { UserPage, User } from 'src/shared/models/user.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-admin-agent',
  templateUrl: './admin-agent.component.html',
  styleUrls: ['./admin-agent.component.scss']
})
export class AdminAgentComponent implements OnInit {
  userPage: UserPage;
  user: User;

  loading: false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserPage();
  }

  async getUserPage(page: number = 0) {
    this.userService.getAdminAgents(page).subscribe(data => {
      this.userPage = data;
    });
  }

  async onCreate(user: User) {
    await this.userService.createAdminAgent(user).subscribe(data => {
      this.getUserPage();
    });
  }

  onSelect(id: number) {
    const user = this.userPage.content.find(u => u.id === id);
    this.user = user;
  }

  async onRemoveAgent(id: number) {
    console.log('On leave ', id);
    await this.userService.removeAdminAgents(id).subscribe(data => {
      this.getUserPage();
    });
  }
}

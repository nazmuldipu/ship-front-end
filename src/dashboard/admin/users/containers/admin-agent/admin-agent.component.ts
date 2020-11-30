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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserPage();
  }

  async getUserPage(page: number = 0) {
    try {
      this.userPage = await this.userService.getAdminAgents(page).toPromise();
    } catch (err) { console.log(err) }
  }

  async onCreate(user: User) {
    try {
      const resp = await this.userService.createAdminAgent(user).toPromise();
      this.getUserPage();
    } catch (err) { console.log(err) }
  }

  onSelect(id: number) {
    const user = this.userPage.content.find(u => u.id === id);
    this.user = user;
  }

  async onRemoveAgent(id: number) {
    if (confirm('Are you sure remove agent with id ' + id)) {
      try {
        const resp = await this.userService.removeAdminAgents(id).toPromise();
        this.getUserPage();
      } catch (err) { console.log(err) }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { UserPage, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {
  userPage: UserPage;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getServiceAdminAgents();
  }

  async getServiceAdminAgents(page: number = null) {
    this.userService.getServiceAdminAgents(page).subscribe(data => {
      this.userPage = data;
    });
  }

  async onCreate(user: User) {
    await this.userService.createSerivceAdminAgent(user).subscribe(data => {
      this.getServiceAdminAgents();
    });
  }

  onSelect(id: number) {
    const user = this.userPage.content.find(u => u.id === id);
    this.user = user;
  }

  async onRemoveAgent(id: number) {
    console.log('On leave ', id);
    await this.userService.removeServiceAdminAgent(id).subscribe(data => {
      this.getServiceAdminAgents();
    });
  }
}

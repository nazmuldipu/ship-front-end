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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getServiceAdminAgents();
  }

  async getServiceAdminAgents(page: number = 0) {
    try {
      this.userPage = await this.userService.getServiceAdminAgents(page).toPromise();
    } catch (err) { console.log(err) }
  }

  async onCreate(user: User) {
    try {
      const resp = await this.userService.createSerivceAdminAgent(user).toPromise();
      this.getServiceAdminAgents();
    } catch (err) { console.log(err) }
  }

  onSelect(id: number) {
    const user = this.userPage.content.find(u => u.id === id);
    this.user = user;
  }

  async onRemoveAgent(id: number) {
    console.log('On leave ', id);
    if (confirm('Are you sure to remove agent with id = ' + id)) {
      try {
        const resp = await this.userService.removeServiceAdminAgent(id).toPromise();
        this.getServiceAdminAgents();
      } catch (err) { console.log(err) }
    }
  }
}

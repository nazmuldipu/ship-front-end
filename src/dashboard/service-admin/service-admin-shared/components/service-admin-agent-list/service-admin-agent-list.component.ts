import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { UserPage, User } from 'src/shared/models/user.model';
import { Ship } from 'src/shared/models/ship.model';

@Component({
  selector: 'service-admin-agent-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-admin-agent-list.component.html',
  styleUrls: ['./service-admin-agent-list.component.scss']
})
export class ServiceAdminAgentListComponent {
  @Input() userPage: UserPage;
  @Input() short: boolean;
  @Output() userId = new EventEmitter<number>();
  @Output() page = new EventEmitter<number>();

  onSelectUser(userId) {
    this.userId.emit(userId);
  }

  getServiceAdminAgents(event) {
    this.page.emit(event);
  }
}

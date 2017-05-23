import {Injectable} from '@angular/core';
import {CounterService} from '../counter-service/counter.service';

@Injectable()
export class UserService {

  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];


  public getActiveUsers(): string[] {
    return this.activeUsers;
  }

  public getInactiveUsers(): string[] {
    return this.inactiveUsers;
  }

  public onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementToInactiveCounter();
  }

  public onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementToActiveCounter();
  }

  public constructor(private counterService: CounterService) {
  }

}

import {Component} from '@angular/core';
import {CounterService} from './counter-service/counter.service';
import {UserService} from './user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  constructor(private counterService: CounterService) {
  }
}

import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'l314-s4';
}

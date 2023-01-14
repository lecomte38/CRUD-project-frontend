import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  
  users?: User[];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.crudService.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

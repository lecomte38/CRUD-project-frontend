import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})

export class CreateUserComponent implements OnInit {

  user: User = {
    firstname: '',
    lastname: '',
  };

  constructor(
    private crudService: CrudService, 
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveUser(): void {
    const body = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
    };

    this.crudService.create(body).subscribe(
      (response) => {
        console.log(response);
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 350);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

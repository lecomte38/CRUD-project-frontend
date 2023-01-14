import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})

export class UpdateUserComponent implements OnInit {

  user: any = [];

  userId: any;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.params['id'];
  }

  getUser(id: any): void {
    this.crudService.get(id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(): void {
    const body = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
    };

    this.crudService.update(this.userId, body).subscribe(
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

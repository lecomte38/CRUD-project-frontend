import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  
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

  deleteUser(): void {
    this.crudService.delete(this.userId).subscribe(
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

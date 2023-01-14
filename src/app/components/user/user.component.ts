import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  
  user: any = [];

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
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
}

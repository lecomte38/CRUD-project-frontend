import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'create_users', component: CreateUserComponent },
  { path: 'update_users/:id', component: UpdateUserComponent },
  { path: 'delete_users/:id', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

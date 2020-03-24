import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Angular 9 app component  */
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TypeFraisComponent } from './components/type-frais/type-frais.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'type-frais', component: TypeFraisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AddUserComponent,EditUserComponent,UsersListComponent,TypeFraisComponent];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [{ path: 'member', component: MemberListComponent },
  //   { path: 'members/:username', component: MemberDetailComponent },
  //   { path: 'member/edit', component: MemberEditComponent,canDeactivate:[PreventUnsavedChangesGuard] },
  //   { path: 'lists', component: ListsComponent },
  //   { path: 'messages', component: MessagesComponent }]
  // },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'member/:id', component: EditEmployeeComponent }
  // { path: 'not-found', component: NotFoundComponent },
  // { path: 'server-error', component: ServerErrorComponent },
  // { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

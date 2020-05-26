import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListItIsComponent } from './department-list-it-is/department-list-it-is.component';
import { EmployeeListItIsComponent } from './employee-list-it-is/employee-list-it-is.component';
import { PageNotFoundItIsComponent } from './page-not-found-it-is/page-not-found-it-is.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component'


const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full' },
  {path: 'departments', component: DepartmentListItIsComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]

},
  {path: 'employees', component: EmployeeListItIsComponent},
  {path: "**", component: PageNotFoundItIsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListItIsComponent,
                                  EmployeeListItIsComponent,
                                  PageNotFoundItIsComponent,
                                  DepartmentDetailComponent,
                                  DepartmentContactComponent,
                                  DepartmentOverviewComponent]


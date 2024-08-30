import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChercherAgentComponent } from './chercher-agent/chercher-agent.component';
import { ChercherDepartmentComponent } from './chercher-department/chercher-department.component';
import { ChercherDepartmentParAdresseComponent } from './chercher-department-par-adresse/chercher-department-par-adresse.component';
import { ChercherDepartmentParRegionComponent } from './chercher-department-par-region/chercher-department-par-region.component';




export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chercher-agent', component: ChercherAgentComponent },
  { path: 'chercher-department', component: ChercherDepartmentComponent },
  { path: 'chercher-department-par-adresse', component: ChercherDepartmentParAdresseComponent },
    { path: 'chercher-department-par-region', component: ChercherDepartmentParRegionComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

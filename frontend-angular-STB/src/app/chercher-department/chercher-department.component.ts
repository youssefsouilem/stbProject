import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chercher-department',
  standalone: true,
  imports: [],
  templateUrl: './chercher-department.component.html',
  styleUrl: './chercher-department.component.css'
})
export class ChercherDepartmentComponent {
  constructor(private router: Router) {
}
   handleClick() {
     this.router.navigate(['../chercher-department-par-adresse']);
   }
   handleClick1() {
     this.router.navigate(['../chercher-department-par-region']);
   }
   onImageButtonClick(){
    this.router.navigate(['../home']);

  }
 }


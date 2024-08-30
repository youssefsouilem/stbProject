import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chercher-department-par-region',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chercher-department-par-region.component.html',
  styleUrl: './chercher-department-par-region.component.css'
})
export class ChercherDepartmentParRegionComponent {
  formData = {
    region :''
  };
  constructor(private router: Router) {
   
   }

  onSubmit() {
    console.log('Form Data:', this.formData);
    // You can add your form submission logic here
  }
  onImageButtonClick(){
    this.router.navigate(['../home']);

  }

}

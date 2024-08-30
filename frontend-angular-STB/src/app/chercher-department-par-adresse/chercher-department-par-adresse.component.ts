import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chercher-department-par-adresse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chercher-department-par-adresse.component.html',
  styleUrls: ['./chercher-department-par-adresse.component.css']
})
export class ChercherDepartmentParAdresseComponent {
  formData = {
    gouvernement: '',
    ville: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Form Data:', this.formData);
    // You can add your form submission logic here
  }

  onImageButtonClick() {
    this.router.navigate(['../home']);
  }
}



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedDataService } from '../services/shared-data.service'; // updated import path


@Component({
  selector: 'app-chercher-department-par-adresse',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './chercher-department-par-adresse.component.html',
  styleUrls: ['./chercher-department-par-adresse.component.css']
})
export class ChercherDepartmentParAdresseComponent {
  formData = {
    Gouvernement: '',
    Ville: ''
  };

  constructor(private http: HttpClient,
    private router: Router,
    private sharedDataService: SharedDataService ) {}

  onSubmit() {
  

    this.http.post<any>('http://localhost:3000/api/department/GetByAdresse', this.formData).subscribe({
      next: response => {
        console.log('Search result:', response);
        this.sharedDataService.setData(response); // store the data in the service
        this.router.navigate(['../resultats-department']); // navigate to the result component
      },
      error: error => {
        console.error('Error occurred:', error);
      }
    });
  }

  onImageButtonClick() {
    this.router.navigate(['../home']);
  }
}



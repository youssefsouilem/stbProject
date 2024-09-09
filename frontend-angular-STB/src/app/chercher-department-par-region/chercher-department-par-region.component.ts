import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedDataService } from '../services/shared-data.service'; // updated import path

@Component({
  selector: 'app-chercher-department-par-region',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './chercher-department-par-region.component.html',
  styleUrls: ['./chercher-department-par-region.component.css']
})
export class ChercherDepartmentParRegionComponent {
  formData = {
    region: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3000/api/department/GetByregion', this.formData).subscribe({
      next: response => {
        console.log('Search result:', response);
        this.sharedDataService.setData(response);
        this.router.navigate(['../resultats-department']);
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


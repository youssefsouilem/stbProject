import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // CommonModule might be needed for common directives

import { SharedDataService } from '../services/shared-data.service';

interface TableRow {
  matricule: number;
  Nom_departement: string;
  Email: string;
  num_tel: number;
  Adresse: string;
  Responsable: string;
  Ville: string;
  Gouvernement:string,
  Region:String;
  listeAgents: { nom: string, prenom: string }[]; // Updated to match the agent structure

}

@Component({
  selector: 'app-resultats-department',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './resultats-department.component.html',
  styleUrls: ['./resultats-department.component.css']
})
export class ResultatsDepartmentsComponent implements OnInit {
  rows: TableRow[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const data = this.sharedDataService.getData();
    if (data) {
      this.rows = data;
    }
  }

  onImageButtonClick() {
    this.router.navigate(['../home']);
  }
}

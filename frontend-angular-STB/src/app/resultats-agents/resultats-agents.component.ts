import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // CommonModule might be needed for common directives

import { SharedDataService } from '../services/shared-data.service';

interface TableRow {
  _id: String
  matricule: number;
  nom: string;
  prenom: string;
  poste: string;
  num_tel: number;
  email: string;
  siege:string;
  adresse:string;
  agence:String
}

@Component({
  selector: 'app-resultats-agents',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './resultats-agents.component.html',
  styleUrl: './resultats-agents.component.css'
})
export class ResultatsAgentsComponent implements OnInit {
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

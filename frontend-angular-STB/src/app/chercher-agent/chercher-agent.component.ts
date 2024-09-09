import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-chercher-agent',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './chercher-agent.component.html',
  styleUrls: ['./chercher-agent.component.css']
})
export class ChercherAgentComponent {
  formData = { matricule: '', nom: '', prenom: '', poste: '' };

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  onSubmit() {
    // Case 1: Only matricule
    if (this.formData.matricule && !this.formData.nom && !this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentbyMatricule', { matricule: this.formData.matricule });
    }
    // Case 2: Only nom
    else if (!this.formData.matricule && this.formData.nom && !this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentByNom', { nom: this.formData.nom });
    }
    // Case 3: Only prenom
    else if (!this.formData.matricule && !this.formData.nom && this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentbyPrenom', { prenom: this.formData.prenom });
    }
    // Case 4: Only poste
    else if (!this.formData.matricule && !this.formData.nom && !this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByPoste', { poste: this.formData.poste });
    }
    // Case 5: nom and prenom
    else if (!this.formData.matricule && this.formData.nom && this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentByNomAndPrenom', { nom: this.formData.nom, prenom: this.formData.prenom });
    }
    // Case 6: nom and matricule
    else if (this.formData.matricule && this.formData.nom && !this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentByNomAndMatricule', { nom: this.formData.nom, matricule: this.formData.matricule });
    }
    // Case 7: prenom and matricule
    else if (this.formData.matricule && !this.formData.nom && this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentByPrenomAndMatricule', { prenom: this.formData.prenom, matricule: this.formData.matricule });
    }
    // Case 8: poste and matricule
    else if (this.formData.matricule && !this.formData.nom && !this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByPosteAndMatricule', { poste: this.formData.poste, matricule: this.formData.matricule });
    }
    // Case 9: nom and poste
    else if (!this.formData.matricule && this.formData.nom && !this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByNomAndPoste', { nom: this.formData.nom, poste: this.formData.poste });
    }
    // Case 10: prenom and poste
    else if (!this.formData.matricule && !this.formData.nom && this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByPrenomAndPoste', { prenom: this.formData.prenom, poste: this.formData.poste });
    }
    // Case 11: nom, prenom, and poste
    else if (!this.formData.matricule && this.formData.nom && this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByNomPrenomAndPoste', {
        nom: this.formData.nom,
        prenom: this.formData.prenom,
        poste: this.formData.poste
      });
    }
    // Case 12: nom, prenom, and matricule
    else if (this.formData.matricule && this.formData.nom && this.formData.prenom && !this.formData.poste) {
      this.searchAgent('getAgentByNomPrenomAndMatricule', {
        nom: this.formData.nom,
        prenom: this.formData.prenom,
        matricule: this.formData.matricule
      });
    }
    // Case 13: nom, poste, and matricule
    else if (this.formData.matricule && this.formData.nom && !this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByNomPosteAndMatricule', {
        nom: this.formData.nom,
        poste: this.formData.poste,
        matricule: this.formData.matricule
      });
    }
    // Case 14: prenom, poste, and matricule
    else if (this.formData.matricule && !this.formData.nom && this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByPrenomPosteAndMatricule', {
        prenom: this.formData.prenom,
        poste: this.formData.poste,
        matricule: this.formData.matricule
      });
    }
    // Case 15: All fields (nom, prenom, poste, matricule)
    else if (this.formData.matricule && this.formData.nom && this.formData.prenom && this.formData.poste) {
      this.searchAgent('getAgentByAllFields', {
        matricule: this.formData.matricule,
        nom: this.formData.nom,
        prenom: this.formData.prenom,
        poste: this.formData.poste
      });
    }
  }

  searchAgent(endpoint: string, data: any) {
    this.http.post<any>(`http://localhost:3000/api/agent/${endpoint}`, data).subscribe({
      next: (response) => {
        console.log('Search result:', response);
        this.sharedDataService.setData(response);
        this.router.navigate(['../resultats-agents']);
      },
      error: (error) => {
        console.error('Error occurred:', error);  
      }
    });
  }

  onImageButtonClick() {
    this.router.navigate(['../home']);
  }
}

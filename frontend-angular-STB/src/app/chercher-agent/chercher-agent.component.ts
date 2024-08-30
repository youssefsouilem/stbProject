import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chercher-agent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chercher-agent.component.html',
  styleUrl: './chercher-agent.component.css'
})
export class ChercherAgentComponent {
  formData = {
    matricule: '',
    nom: '',
    prenom: '',
    poste: ''
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

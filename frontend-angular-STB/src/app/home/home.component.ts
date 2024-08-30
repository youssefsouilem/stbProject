import { Component } from '@angular/core';
import { MyService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /*imageUrl: string;
  imageUrl2: string;*/
  constructor(private router: Router) {
   /* this.imageUrl = '../assets/agent.jpg';
    this.imageUrl2 = 'C:/Users/souil/OneDrive/Images/messi.PNG';*/
  }
  handleClick() {
    this.router.navigate(['../chercher-agent']);
  }
  handleClick1() {
    this.router.navigate(['../chercher-department']);
  }
  onImageButtonClick(){
    this.router.navigate(['../home']);

  }
}

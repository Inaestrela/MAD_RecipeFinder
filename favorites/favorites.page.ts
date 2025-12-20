import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MyDataService } from '../services/my-data';
import { IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  standalone: true,
  imports: [CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    RouterLink,],
})

//Load the stored favorites
export class FavoritesPage{
  favorites: any[] = [];

  constructor(private mds: MyDataService, private router: Router) { }

  async ionViewDidEnter(){
    this.favorites = (await this.mds.get('favorites')) || [];
  }

  //Redirecting details button to recipe details
  goToCard(id:number) {
      this.router.navigate(['/recipe-details', id]);
    }

}

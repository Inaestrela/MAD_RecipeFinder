import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonListHeader, IonHeader, IonTitle, IonToolbar, IonList, IonLabel,IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  standalone: true,
  imports: [IonContent, RouterLink, IonButton, IonListHeader, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem]
})
export class RecipesPage implements OnInit {

  constructor() {
    console.log("constructor()");
   }
    ngOnInit() {
    console.log("ngOnInit()");
   }
    ionViewDidEnter() {
    console.log("ionViewDidEnter()");
   }
    ionViewWillLeave() {
    console.log("ionViewWillLeave()");
   }
     ionViewDidLeave() {
    console.log("ionViewDidLeave()");
   }

}

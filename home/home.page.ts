import { Component } from '@angular/core';
import { RecipesPage } from '../recipes/recipes.page';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel,
  IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonHeader,
    RecipesPage,
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonLabel,
    IonSearchbar],
})
export class HomePage {
  constructor() {}
}

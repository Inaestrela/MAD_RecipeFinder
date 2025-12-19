import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http';
import { ActivatedRoute } from '@angular/router';
import {RouterLink } from '@angular/router';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonListHeader, 
  IonItem, 
  IonLabel, 
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonList, 
    IonListHeader, 
    IonItem, 
    IonLabel, 
    IonButton, 
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle]
})
export class RecipeDetailsPage {
apiKey = '70759a4f7911402abcc53d3c51d3b759';
recipe: any = null;
ingredients: any[]=[];
steps:any[]=[];

constructor( private route: ActivatedRoute, private http:MyHttpService) {}
async ionViewDidEnter(){

  const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    const options: HttpOptions = {
      url: `https://api.spoonacular.com/recipes/${id}/information`,
      params: {apiKey: this.apiKey}
    };

    const data = await this.http.get(options);
    this.recipe = data;
    this.ingredients = data?.extendedIngredients ?? [];
    this.steps = data?.analyzedInstructions?.[0]?.step ?? [];
    console.log('details data', data);

}

}

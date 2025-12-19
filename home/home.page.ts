import { Component } from '@angular/core';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http';
import { MyDataService } from '../services/my-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonSearchbar,
    IonButton,
    IonButtons,
    IonIcon,
    RouterLink],
})
export class HomePage {
  recipes: any[] = [];
  query = '';
  apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(
    private http: MyHttpService,
    private mds: MyDataService,
    private router: Router
  ) {}

  //load saved recipes from storage
  async ionViewDidEnter() {
    const saved = await this.mds.get('recipes');
    if (saved) this.recipes = saved;
  }

  //search button method
  async searchRecipes() {
    const q = this.query.trim();
    if (!q) {this.recipes =[]; return;
    }

    //request to Spoonacular for search
    const options: HttpOptions = {
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        apiKey: this.apiKey,
        query: q,
        number: '12'
      }
    };
    
    //storing what was searched
    const data = await this.http.get(options);
    this.recipes = data?.results ??[];
    await this.mds.set('recipes', this.recipes);
  }

  //Redirecting details button to recipe details
  goToCard(id:number) {
      this.router.navigate(['/recipe-details', id]);
    }
    
}

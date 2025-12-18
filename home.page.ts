import { Component } from '@angular/core';
import { IonHeader,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonLabel,
  IonSearchbar } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { MyHttpService } from '../services/my-http';
import { MyDataService } from '../services/my-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

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
    IonList,
    IonItem,
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonLabel,
    IonSearchbar,
    IonButton],
})
export class HomePage {
  recipes: any[] = [];
  query = '';
  apiKey = 'b3eaae448caf4db895e3ce0e04425887';

  constructor(
    private http: MyHttpService,
    private mds: MyDataService
  ) {}

  async ionViewDidEnter() {
    const saved = await this.mds.get('recipes');
    if (saved) this.recipes = saved;
  }

  async searchRecipes() {
    const q = this.query.trim();
    if (!q) {this.recipes =[]; return;
    }


    const options: HttpOptions = {
      url: 'https://api.spoonacular.com/recipes/findByIngredients',
      params: {
        apiKey: this.apiKey,
        ingredients: q,
        number: '12'
      }
    };

    const data = await this.http.get(options);
    this.recipes = Array.isArray(data) ? data : [];

    await this.mds.set('recipes', this.recipes);
  }

  goToCard(id:number) {
      console.log('Clicked recipe id:', id);
    }
    
}

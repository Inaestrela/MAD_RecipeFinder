import { Component } from '@angular/core';
import { IonHeader,
  IonList,
  IonItem,
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
  apiKey = '21947b3dd50482168e163cbad4b630b4581d0f7d';

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
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        apiKey: this.apiKey,
        query: q,
        number: '12'
      }
    };

    const data = await this.http.get(options);
    this.recipes = data?.results ?? [];

    await this.mds.set('recipes', this.recipes);
  }
}

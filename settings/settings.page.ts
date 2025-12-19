import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MyDataService } from '../services/my-data';
import { IonContent, 
  IonButton, 
  IonListHeader, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonLabel, 
  IonItem, 
  IonRadio,
  IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonContent, 
    RouterLink, 
    IonButton, 
    IonListHeader, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonList, 
    IonLabel, 
    IonItem, 
    IonListHeader,
    IonRadio,
    IonRadioGroup]
})
export class SettingsPage implements OnInit {

  unit ='metric';

  constructor(private mds: MyDataService) {
    console.log("constructor()");
   }
    ngOnInit() {
    console.log("ngOnInit()");
   }
    async ionViewDidEnter() {
    const savedUnit = await this.mds.get('unit');
    if (savedUnit) this.unit = savedUnit;
   }
   async saveUnit(){
    await this.mds.set('unit', this.unit);
   }

}

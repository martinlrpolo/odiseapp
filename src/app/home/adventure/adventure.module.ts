import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdventurePage } from './adventure.page';
import { InformationPage } from './information/information.page';

const routes: Routes = [
  {
    path: '',
    component: AdventurePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdventurePage,
    InformationPage
  ],
  entryComponents : [
    InformationPage
  ]
})
export class AdventurePageModule {}

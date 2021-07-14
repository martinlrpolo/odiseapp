import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';


import { TabsPage } from './tabs.page';

//Pages
import { HomePage } from '../home/home/home.page';
import { SearchPage } from '../search/search.page';
import { NotificationPage } from '../notification/notification.page';
import { ProfilePage } from '../profile/profile.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    HomePage,
    SearchPage,
    NotificationPage,
    ProfilePage
  ]
})
export class TabsPageModule {}

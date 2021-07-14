import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

//Pages
import { HomePage } from '../home/home/home.page';
import { SearchPage } from '../search/search.page';
import { NotificationPage } from '../notification/notification.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            component : SearchPage
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component : HomePage
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            component : NotificationPage
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component : ProfilePage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

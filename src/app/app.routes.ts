import { Routes } from '@angular/router';
import { OpenPageComponent } from './open-page/open-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListTamuComponent } from './list-tamu/list-tamu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Nesi & Yogta', component: OpenPageComponent },
  {
    path: ':guestName',
    children: [
      { path: '', component: OpenPageComponent },
      { path: 'main', title: 'Nesi & Yogta', component: MainPageComponent },
      { path: 'listTamu8824882488248824', title: 'ListTamu88248824', component: ListTamuComponent },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
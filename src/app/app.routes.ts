import { Routes } from '@angular/router';
import { OpenPageComponent } from './open-page/open-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListTamuComponent } from './list-tamu/list-tamu.component';

export const routes: Routes = [
  {
    path: ':guestName',
    children: [
      { path: '', title: 'Nesi & Yogta', component: OpenPageComponent },
      { path: 'main', title: 'Nesi & Yogta', component: MainPageComponent },
      { path: 'listTamu8824882488248824', title: 'ListTamu88248824', component: ListTamuComponent },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '', component: NotFoundComponent, pathMatch: 'full' }, // Redirect empty path to 404
  { path: '**', component: NotFoundComponent } // Catch all invalid routes and redirect to 404
];
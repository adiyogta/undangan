import { Routes } from '@angular/router';
import { OpenPageComponent } from './open-page/open-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListTamuComponent } from './list-tamu/list-tamu.component';
  
export const routes: Routes = [
    {'path': '', redirectTo:'/home', pathMatch:'full'},
    {'path': 'home','title':'Nesi & Yogta', component:OpenPageComponent},
    {'path': ':guestName', component:OpenPageComponent},
    {'path': ':guestName', children:[
        {'path': 'main','title':'Nesi & Yogta',component:MainPageComponent},
        {'path': 'listTamu','title':'ListTamu', component:ListTamuComponent},
    ]},
    
    {'path': '**', component: NotFoundComponent }
];

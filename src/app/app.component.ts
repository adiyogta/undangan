import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OpenPageComponent } from "./open-page/open-page.component";
import { BgComponent } from "./bg/bg.component";
import { MainPageComponent } from "./main-page/main-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OpenPageComponent, BgComponent, MainPageComponent, RouterModule]
})
export class AppComponent {
  title = 'undangan';
}

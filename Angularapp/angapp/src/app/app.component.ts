import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavBarComponent]
})
export class AppComponent {
  title = 'angapp';
}

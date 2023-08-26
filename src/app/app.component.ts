import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'recipes'

  onNavigate(selectedView:string) {
    this.view = selectedView;
  }
 
}

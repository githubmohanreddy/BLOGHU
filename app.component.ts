import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Traning !!';
  card = '../assets/Apple.png';
  choice = true;

  show(){
    alert('Button clicked!');
  }

}

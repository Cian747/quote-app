import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id: 1, words:'Blood,Sweat,Respect. The first two you give and the last one you earn'},
    {id: 2, words:'Hard work beats talent when talent does not work hard'},
    {id: 3, words:'The process is what makes you sweet'}
  ];
}

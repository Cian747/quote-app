import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id: 1, words:'Blood,Sweat,Respect. The first two you give and the last one you earn', author: 'Dwayne(The Rock!) Johnson'},
    {id: 2, words:'Hard work beats talent when talent does not work hard', author:'Cristiano Ronaldo'},
    {id: 3, words:'The process is what makes you sweet', author:'Eric The HipHop Preacher'},
    {id: 4, words:'Get out of the stands and get in the game', author:'Eric the HipHop Preacher'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

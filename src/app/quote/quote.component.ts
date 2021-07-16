import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Blood,Sweat,Respect. The first two you give and the last one you earn', 'Dwayne(The Rock!) Johnson'),
    new Quote(2,'Hard work beats talent when talent does not work hard','Cristiano Ronaldo'),
    new Quote(3,'The process is what makes you sweet','Eric The HipHop Preacher'),
    new Quote(4,'Get out of the stands and get in the game','Eric the HipHop Preacher')
  ];

  toggleDetails(index: number){
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  completeGoal(isComplete:boolean, index:number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

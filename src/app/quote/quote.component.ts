import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Blood,Sweat,Respect. The first two you give and the last one you earn', 'Dwayne(The Rock!) Johnson',20, 2, new Date(2015,4,27)),
    new Quote(2,'Hard work beats talent when talent does not work hard','Cristiano Ronaldo',10, 3, new Date(2021,6,29)),
    new Quote(3,'The process is what makes you sweet','Eric The HipHop Preacher', 12, 1, new Date(2018,8,12)),
    new Quote(4,'Get out of the stands and get in the game','Eric the HipHop Preacher', 11,2,new Date(2019,4,2) )
  ];

  toggleDetails(index: number){
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  DeleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to Delete ${this.quotes[index].words} quote?`)
      
      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }

   addLike(myLike:boolean,index:number){
     if(myLike){
     this.quotes[index].likes++;
     }
   }

   addNotLike(yourLike:boolean,index:number){
     if(yourLike)
     this.quotes[index].dislikes++;
   }
   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

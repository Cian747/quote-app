import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Blood,Sweat,Respect. The first two you give and the last one you earn','James Colden', 'Dwayne(The Rock!) Johnson',20, 2, new Date(2015,4,27)),
    new Quote(2,'Hard work beats talent when talent does not work hard','JJ Watt','Cristiano Ronaldo',10, 3, new Date(2018,6,29)),
    new Quote(3,'The process is what makes you sweet','Ben Lionel Scott','Eric The HipHop Preacher',12, 1, new Date(2018,8,12)),
    new Quote(4,'Get out of the stands and get in the game','Kevin Hart ','Eric the HipHop Preacher',11,2,new Date(2019,4,2) ),
    new Quote(5,'At a certain point, you gotta stop living in your head and start making things happen','Kendrick Lamar','Third Eye Thought',10,3, new Date(2020,12,31)),
    new Quote(6,"Don't watch the clock; do what it does. Keep going",'J Cole','Sam Levenson',2,1, new Date(2021,4,27))
  ];

  toggleDetails(index: number){
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  DeleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the quote by ${this.quotes[index].publisher}?`)

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

   newScript!:string;
   newAuthor!:string;
   newLikes!:number;
   newDislikes!:number;
   
   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.newScript = quote.words;
    this.newAuthor = quote.author;
    this.newLikes = 0;
    this.newDislikes = 0;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

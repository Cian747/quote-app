import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() name!: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

 
  @Output() myLike = new EventEmitter<boolean>();

  upVote(yes:boolean){
    this.myLike.emit(yes);
  }


  @Output() yourLike = new EventEmitter<boolean>();

  downVote(no:boolean){
    this.yourLike.emit(no);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

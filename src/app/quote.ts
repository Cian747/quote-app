export class Quote {
  
  showName: boolean;
  constructor(public id: number,public words: string,public author: string,public publisher: string,public likes:number,public dislikes:number, public completeDate: Date){
    this.showName=false;
  }
}

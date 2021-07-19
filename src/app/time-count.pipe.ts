import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {
    transform(value: any): any {
      let today:Date = new Date();

      let todayWithNoTime:any = new Date(
        today.getFullYear(), 
        today.getMonth(), 
        today.getDate(),
        today.getHours(),
        today.getMinutes(),
        today.getSeconds()
      );

      var secondsDifference = Math.abs(todayWithNoTime - value);

      const secondsInHours = 3600;
      const secondsInMinutes = 60;
      const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day

      var dateDifferenceSeconds = secondsDifference*0.001; //converts miliseconds to seconds
      var dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);
      var hoursCounter = Math.floor(dateDifferenceSeconds/secondsInHours);
      var minutesCounter = Math.floor(dateDifferenceSeconds/secondsInMinutes);
      var secondsCounter = Math.floor(dateDifferenceSeconds)
  
      if (dateCounter >= 1){
        return dateCounter + " days ago";
      }else if (dateCounter < 1 && hoursCounter >= 1){
        return hoursCounter + " hours ago";
      }else if(hoursCounter < 1 && minutesCounter >= 1){
        return minutesCounter + " minutes ago";
      }else{
        return secondsCounter + " seconds ago";
      }
    }
  }


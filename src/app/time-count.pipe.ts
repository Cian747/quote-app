import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    let fullYear = value.getFullYear();
    let month = value.getMonth();
    let day = value.getDate();
    let currentMinutes = value.getMinutes();
    let currentSeconds = value.getSeconds();

    let timeSince = fullYear + "-" + month + "-" + day + ":" + currentMinutes + ":" + currentSeconds;
    return timeSince;
  }

}

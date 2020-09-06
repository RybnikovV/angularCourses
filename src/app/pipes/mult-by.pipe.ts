import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multBy'
})
export class MultByPipe implements PipeTransform {

  transform(num: number, multiplier: number = 1): number {
    return num * multiplier;
  }

}

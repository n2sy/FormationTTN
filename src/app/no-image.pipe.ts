import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return 'avatar.jpg';
    else
      return value;
  }

}

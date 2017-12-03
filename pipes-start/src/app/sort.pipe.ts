import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if (a[propName] < b[propName]) {
        return -1 // van A - Z
      } else {
        return 1  // a > b = van Z tot A
      }
    });
  }
}

//
// if (value.length > 0 ) {
// }
// return value; // if array is empty just return, do nothing
// }

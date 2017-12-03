import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string, propertyName: string): any {
    if (value.length === 0 || filteredString === '') {
      return value; // if array is empty just return, do nothing
    }
    const restultArray = [];
    for (let item of value) {
      // check status of each server matches the filterString (filteredStatus)
      // the property of the server object, so the propertyName is status in the server object.
      if (item[propertyName] === filteredString) {
        restultArray.push(item)
      }
    }
    return restultArray;
  }
}

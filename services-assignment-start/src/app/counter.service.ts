export class CounterService {

  active2Inactive: number = 0;
  inactive2Active: number = 0;

  switched2Active() {
    this.inactive2Active++;
    console.log('Switched to Active ' + this.inactive2Active);
  }

  switched2Inactive() {
    this.active2Inactive++;
    console.log('Switched to Inactive ' + this.active2Inactive);
  }
}

import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // the event emitter to be send out to the appcomponent and to bind in the appcomponent
  @Output() gameStarted = new EventEmitter<number>();
  gameNumber: number = 0;
  // reference to the interval is used to clear the interval later
  startGame;

  constructor() {
  }

  ngOnInit() {
  }

  startTheGame() {
    this.startGame = setInterval(() => {
      this.gameStarted.emit(this.gameNumber + 1);
      this.gameNumber++;
      console.log(this.gameNumber);
    }, 1000);
  }

  stopTheGame() {
    clearInterval(this.startGame);
  }
}

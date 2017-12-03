import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName: string = '';
  newServerContent: string = '';
  @ViewChild('serverContentReference') serverContentReferenceInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addServer(serverNameReferenceInput: HTMLInputElement) {
    // console.log(serverNameReferenceInput.value);
    console.log(this.serverContentReferenceInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: serverNameReferenceInput.value,
      serverContent: this.serverContentReferenceInput.nativeElement.value
    });
  }

  addBlueprint(serverNameReferenceInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameReferenceInput.value,
      serverContent: this.serverContentReferenceInput.nativeElement.value
    });
  }
}

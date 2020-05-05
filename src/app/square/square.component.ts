import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  // use : <app-square value="X"></app-square> in the parent html
  @Input() value :'X'|'O'; // a value field that can be taken from parent. can only be x or o. 

  // Dumb or Stateless component. It cannot modify it's own state. It just shows what i gets from it's parent.

}

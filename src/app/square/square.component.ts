import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <p>
    <button>{{ value }}</button>
  </p>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  // use : <app-square value="X"></app-square> in the parent html
  @Input() value :'X'|'O'; // a value field that can be taken from parent. can only be x or o. 

}

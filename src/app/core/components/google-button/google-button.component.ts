import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {
  @Input() text: String;
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.buttonClick.emit(true);
  }

}

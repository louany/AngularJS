import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-btn',
  templateUrl: './game-btn.component.html',
  styleUrls: ['./game-btn.component.scss']
})
export class GameBtnComponent implements OnInit {

  @Output() valueBtn = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onClickButton(value: string) {
    this.valueBtn.emit(value);
  }
}

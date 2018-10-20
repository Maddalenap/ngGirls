import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {
title: string;

changeTitle(newTitle: string) {
  this.title = newTitle;
  this.submit.emit(newTitle);
}
@Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.title = 'Welcome';
   }

  ngOnInit() {
    this.title = "czesc";
   
  }

}

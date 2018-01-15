import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  @Output() lim:EventEmitter<number> = new EventEmitter<number>();
  @Output() fil:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  limiter(limite: HTMLInputElement) {
    this.lim.emit(Number(limite.value));
  }

  filtrer(filtre: HTMLInputElement) {
    this.fil.emit(filtre.value);
  }

}

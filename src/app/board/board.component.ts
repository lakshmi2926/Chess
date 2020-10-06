import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  sixtyFour = new Array(64).fill(0).map((_, i) => i);
  @ViewChildren('square') components:QueryList<SquareComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // print array of CustomComponent objects
    console.log(this.components.toArray());
}
}

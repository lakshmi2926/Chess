import { Component, OnInit, Input } from '@angular/core';
import { bindCallback } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() index;
  count:number=0;
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    console.log(this.index)
  }

getSquareColor(){

  if(this.index%2==0)
  {
  return "white";
  }

else{
  return "black";
}
}

incrementCouner(){
this.count++;
const body={id:this.index,count:this.count};
this.gameService.stringSubject.next(body)
}
}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  squareList:any=[];
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.gameService.stringSubject.subscribe((res:any)=>{
      this.updateList(res);
    })
  }

  updateList(res){

    const found = this.squareList.some(el => el.id === res.id);
    if(!found){
      this.squareList.push(res);
    }

  }



}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  public stringSubject = new Subject<Object>();

  passValue(data) {
    this.stringSubject.next(data);
  }

}

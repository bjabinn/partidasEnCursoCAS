import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameUpdates = new Subject<any>();

  getUpdates() {
    return this.gameUpdates.asObservable();
  }

  receiveUpdate(update: any) {
    this.gameUpdates.next(update);
  }
}

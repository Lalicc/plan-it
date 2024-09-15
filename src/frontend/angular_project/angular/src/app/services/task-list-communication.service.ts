import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListCommunicationService {

  private numberSubject = new Subject<number>();

  number$ = this.numberSubject.asObservable();

  sendId(Id: number) {
    this.numberSubject.next(Id);
  }
  constructor() { }
}

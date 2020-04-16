import { Injectable } from '@angular/core';
import { SCREEN_SIZE } from '../enums/screen-size.enum';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenResizeService {

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }
}

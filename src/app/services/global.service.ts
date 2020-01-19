import { Injectable } from '@angular/core';
import {SubEvent} from 'sub-events';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public records: any[] = [];

  public generateGraph: SubEvent<string> = new SubEvent();

}

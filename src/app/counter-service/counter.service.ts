import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  private toActiveCounter = 0;
  private toInactiveCounter = 0;

  public incrementToInactiveCounter() {
    this.toInactiveCounter++;
  }

  public incrementToActiveCounter() {
    this.toActiveCounter++;
  }

  public getToActiveCounter(): number {
    return this.toActiveCounter;
  }

  public getToInactiveCounter(): number {
    return this.toInactiveCounter;
  }

  public constructor() {
  }
}

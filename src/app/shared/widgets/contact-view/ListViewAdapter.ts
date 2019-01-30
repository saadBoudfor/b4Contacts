/**
 * Created by sboudfor on 27/01/2019.
 * Implement Recycle View pattern for angular application.
 */

export class ListViewAdapter {
  private _maxToDisplay: number;
  private _elementList: Array<any>;
  private _elementDisplayed: Array<any> = [];

  constructor(elementList: Array<any>, max: number = 10) {
    this._elementList = elementList;
    this._maxToDisplay = max;
  }

  public get nextElement(): Array<any> {
    if (this._elementDisplayed.length < this._elementList.length) {
      const min = this._elementDisplayed.length;
      const max = min + this._maxToDisplay;
      this._elementDisplayed = this._elementDisplayed.concat(this._elementList.slice(min, max));
    }
    return this._elementDisplayed;
  }

  public get hasNext(): boolean {
    return this._elementList.length !== this._elementDisplayed.length;
  }
}

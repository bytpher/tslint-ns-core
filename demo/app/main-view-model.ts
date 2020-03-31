import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
  static var1: string;
  protected static var2: string;
  private static var3: string;

  pubVariable: string;
  protected var: string;
  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  static method1() {
    // TODO:
  }

  protected static method2() {
    // TODO:
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onTap() {
    this._counter--;
    this.updateMessage();
  }

  protected method() {
    // TODO:
  }

  private updateMessage() {
    this._counter <= 0
      ? (this.message =
          'Hoorraaay! You unlocked the NativeScript clicker achievement!')
      : (this.message = `${this._counter} taps left`);
  }
}

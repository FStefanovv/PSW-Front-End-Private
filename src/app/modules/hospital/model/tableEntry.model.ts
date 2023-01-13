export class TableEntry {
  eventName: string = '';
  min: number = 0;
  max: number = 0;
  total: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.eventName = obj.eventName;
      this.min = obj.min;
      this.max = obj.max;
      this.total = obj.total;
    }
  }
}


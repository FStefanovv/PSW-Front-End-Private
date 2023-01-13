export class StatisticEntry {
  dataPoint: number = 0;
  occurences: number = 0;
 

  public constructor(obj?: any) {
    if (obj) {
      this.dataPoint = obj.dataPoint;
      this.occurences = obj.occurences;
    }
  }
}

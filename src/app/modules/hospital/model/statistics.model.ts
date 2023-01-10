import { StatisticEntry } from "./statisticEntry.model";

export class Statistics {
  statistic: StatisticEntry[] = [];

  public constructor(obj?: any) {
    if (obj) {
      this.statistic = obj.statistic;
    }
  }
}

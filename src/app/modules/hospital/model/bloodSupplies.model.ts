export class BloodSupplies {
  id: number = 0;
  amountOfA: number=0;
  amountOfB: number=0;
  amountOfAB: number=0;
  amountOfO: number=0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.amountOfA = obj.amountOfA;
      this.amountOfB = obj.amountOfB;
      this.amountOfAB = obj.amountOfAB;
      this.amountOfO = obj.amountOfO;
    }
  }
}

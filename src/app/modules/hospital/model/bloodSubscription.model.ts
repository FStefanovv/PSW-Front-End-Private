export class BloodSubscription{
  id: number = 0;
  hospitalId: number = 0;
  amountOfA: number = 0;
  amountOfB: number = 0;
  amountOfAB: number = 0;
  amountOfO: number = 0;
  deliveryDate: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.hospitalId = obj.hospitalId;
      this.amountOfA = obj.amountOfA;
      this.amountOfB = obj.amountOfB;
      this.amountOfAB = obj.amountOfAB;
      this.amountOfO = obj.amountOfO;
      this.deliveryDate = obj.deliveryDate;
    }
  }
}

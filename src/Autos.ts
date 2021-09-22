import { applyMixins } from "./applyMixin";

abstract class Auto {
  constructor(public brendName: string, public numberWheels: number) {}

  move(): void {
    console.log(
      `${this.brendName} is moving, Number of Wheels = ${this.numberWheels}`
    );
  }
}

class Audi extends Auto {
  constructor() {
    super("Audi", 4);
  }

  headlight() {
    console.log("Audi LaserHeadlight turn on");
  }
}

class BMW extends Auto {
  constructor() {
    super("BMW", 4);
  }

  addSportChairs(): void {
    console.log("The Sport chairs of BMW");
  }
}

class Porshe extends Auto {
  constructor() {
    super("Porshe", 4);
  }

  showNavigation() {
    console.log("Porshe navigation is working");
  }
}

export class Tesla extends Auto {
  constructor() {
    super("Tesla", 4);
  }

  batteryPowerInfo(): void {
    console.log(`Power of battery 4000`);
  }
}

class NewUkraineElSuperCar extends Auto {
  constructor() {
    super("NewUkraineElSuperCar", 4);
  }
}

interface NewUkraineElSuperCar extends Audi, Porshe, Tesla, BMW {}

applyMixins(NewUkraineElSuperCar, [Audi, BMW, Porshe, Tesla]);

const nU = new NewUkraineElSuperCar();
nU.move();
nU.batteryPowerInfo();
nU.showNavigation();
nU.addSportChairs();

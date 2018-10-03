abstract class Beverage {
   description: string = 'Unknown Beverage'
   get Description():string{
      return this.description
   }
   abstract cost()
}

abstract class CondimentDecorator extends Beverage {
   abstract get Description()
}

class Espresso extends Beverage {
   constructor(){
      super()
      this.description = `Espresso`
   }

   cost(){
      return 1.99
   }
}

class HouseBlend extends Beverage {
   constructor(){
      super()
      this.description = `House Blend Coffee`
   }

   cost(){
      return 0.89
   }
}

class DarkRoast extends Beverage {
   constructor(){
      super()
      this.description = `Dark Roas Coffee`
   }

   cost(){
      return 1
   }
}

class Decaf extends Beverage {
   constructor(){
      super()
      this.description = `Decaf coffee`
   }

   cost(){
      return 1.1
   }
}

class Mocha extends CondimentDecorator {
   beverage: Beverage

   constructor(beverage: Beverage){
      super()
      this.beverage = beverage
   }

   get Description(){
      return `${this.beverage.Description} Mocha`
   }

   cost(){
      return 0.20 + this.beverage.cost()
   }
}

class Whip extends CondimentDecorator {
   beverage: Beverage

   constructor(beverage: Beverage){
      super()
      this.beverage = beverage
   }

   get Description(){
      return `${this.beverage.Description} Whip`
   }

   cost(){
      return 0.40 + this.beverage.cost()
   }
}


let expresso = new Espresso()
console.log(expresso.Description + ' ' + expresso.cost())

let darkRoast = new DarkRoast()
darkRoast = new Mocha(darkRoast)
darkRoast = new Mocha(darkRoast)
darkRoast = new Whip(darkRoast)

console.log(darkRoast.Description + ' ' + darkRoast.cost())






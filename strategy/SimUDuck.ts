interface FlyBehavior {
   fly()
}

interface QuackBehavior {
   quack()
}

class FlyNoWay implements FlyBehavior{
   fly(){
      console.log(`I can't fly`)
   }
}

class FlyRocket implements FlyBehavior{
   fly(){
      console.log(`I'm flying like a rocket`)
   }
}

class FlyWithWings implements FlyBehavior{
   fly(){
      console.log(`I'm flying!`)
   }
}

class Quack implements QuackBehavior{
   quack(){
      console.log(`quack!`)
   }
}

class MuteQuack implements QuackBehavior{
   quack(){
      console.log(`<< silence >>`)
   }
}

abstract class Duck {
   flyBehavior: FlyBehavior
   quackBehavior: QuackBehavior

   constructor(){
   }

   performFly(){
      this.flyBehavior.fly()
   }

   performQuack(){
      this.quackBehavior.quack()
   }

   setFlyBehavior(fb: FlyBehavior){
      this.flyBehavior = fb
   }

   setQuackBehavior(qb: QuackBehavior){
      this.quackBehavior = qb
   }
   
   swim(){
      console.log(`All ducks float, even decoys!`)
   }
}

class MallarDuck extends Duck {

   constructor(){
      super()
      this.quackBehavior = new Quack()
      this.flyBehavior = new FlyWithWings()
   }

   display() {
      console.log("I'm a real Mallard duck")
   }
}

class ModelDuck extends Duck {
   constructor(){
      super()
      this.quackBehavior = new MuteQuack()
      this.flyBehavior = new FlyNoWay()
   }

   display() {
      console.log("I'm a Model duck")
   }
}


   let mallard: Duck = new MallarDuck()


    mallard.performQuack() // Quack
    mallard.performFly() // I'm flying!!
    
    let model: Duck = new ModelDuck()
    model.performFly() // I can't fly
    model.performQuack() // << silence >>
    model.setFlyBehavior(new FlyRocket())
    model.performFly() // I'm flying with a rocket
    model.setQuackBehavior(new Quack())
    model.performQuack() // Quack

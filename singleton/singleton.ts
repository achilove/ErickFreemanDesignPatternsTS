class Singleton {

   private static _instance: Singleton

   private constructor(){

   }

   static get Instance(){
      return this._instance || (this._instance = new this())
   }
}

const singletonInstance = Singleton.Instance

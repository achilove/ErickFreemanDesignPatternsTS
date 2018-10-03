class ChocolateBoiler {
   private empty: boolean
   private boiled: boolean
   private static _instance: ChocolateBoiler

   private constructor(){
      this.empty = true
      this.boiled = true
   }

   static get Instance(){
      return this._instance || (this._instance = new this())
   }

   fill():void {
      if(this.IsEmpty){
         this.empty = false
         this.boiled = false
         console.log(`filling`)
      }else{
         console.log(`cannot fill`)
      }
   }

   drain():void{
      if(!this.IsEmpty && this.IsBoiled){
         this.empty = true
         console.log(`draining`)
      }else{
         console.log(`cannot drain`)
      }
   }

   boil():void{
      if(!this.IsEmpty && !this.IsBoiled){
         this.boiled = true
         console.log(`boiling`)
      }else{
         console.log(`cannot boil`)
      }
   }

   get IsEmpty():boolean{
      return this.empty
   }

   get IsBoiled():boolean{
      return this.boiled
   }
}

const chocolateBoiler = ChocolateBoiler.Instance
const chocolateBoiler2 = ChocolateBoiler.Instance
chocolateBoiler.fill()
chocolateBoiler2.fill()
chocolateBoiler.boil()
chocolateBoiler2.boil()
chocolateBoiler.drain()
chocolateBoiler2.drain()


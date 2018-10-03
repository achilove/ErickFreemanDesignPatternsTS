interface Subject {
   registerObserver(o: Observer)
   removerObserver(o: Observer)
   notifyObservers()
}


interface Observer {
   update(temp: number, humidity: number, pressure: number)
}

interface DisplayElement{
   display()
}

class WeatherData implements Subject{
   private observers: Observer[] = []
   private temp: number
   private humidity: number
   private pressure: number

   constructor(){
   }
   
   registerObserver(o: Observer) {
      this.observers.push(o)
   }
   removerObserver(o: Observer) {
      let observerIndex = this.observers.indexOf(o)
      this.observers.splice(observerIndex, 1)
   }

   notifyObservers() {
      for(let observer of this.observers){
         observer.update(this.temp, this.humidity, this.pressure)
      }
   }

   measurementsChanged(){
      this.notifyObservers()
   }

   serMeasurements(temp: number, humidity: number, pressure: number){
      this.temp = temp
      this.humidity = humidity
      this.pressure = pressure
      this.measurementsChanged();
   }
}


class CurrentConditionDisplay implements Observer, DisplayElement{
   private temperature: number
   private humidity: number
   private pressure: number
   private weatherData: Subject

   constructor(weatherData: Subject){
      this.weatherData = weatherData
      weatherData.registerObserver(this)
   }

   update(temperature:number, humidity: number, pressure:number){
      this.humidity = humidity
      this.temperature = temperature
      this.pressure = pressure
      this.display() 
   }

   display(){
      console.log(`Current conditions: ${this.temperature} degree 
      and humidity ${this.humidity} 
      and pressure is ${this.pressure}`)
   }
}


let weatherData: WeatherData = new WeatherData()
let currentDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(weatherData)
// let anotherDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(weatherData)

weatherData.serMeasurements(12,23,45)
weatherData.serMeasurements(15,28,60)
weatherData.serMeasurements(16,30,75)


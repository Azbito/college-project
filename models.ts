interface DateTime {
  date: string
  time: string
}

class Model {
  constructor(
    public name: string,
    public brand: Brand,
    public vehicles: Vehicle[] = []
  ) {
    brand.addModel(this)
  }
}

class Brand {
  constructor(public name: string, public models: Model[] = []) {}

  addModel(model: Model): void {
    this.models.push(model)
  }
}

class Vehicle {
  public rented: boolean = false
  public rentalDate?: DateTime
  public returnDate?: DateTime

  constructor(
    public plateID: string | number,
    public color: string,
    public year: number,
    public fuelType: string,
    public numberOfDoors: number,
    public mileage: number,
    public RENAVAM: number,
    public chassis: string,
    public rentalValue: number,
    public model: Model
  ) {
    model.vehicles.push(this)
  }
}

class Client {
  public rentedVehicles: Vehicle[] = []

  constructor(
    public name: string,
    public email: string,
    public phoneNumber: number
  ) {}

  rentVehicle(vehicle: Vehicle, rentalDate: DateTime): void {
    vehicle.rented = true
    vehicle.rentalDate = rentalDate
    this.rentedVehicles.push(vehicle)
  }

  returnVehicle(vehicle: Vehicle, returnDate: DateTime): void {
    vehicle.rented = false
    vehicle.returnDate = returnDate
    const index = this.rentedVehicles.indexOf(vehicle)
    if (index !== -1) {
      this.rentedVehicles.splice(index, 1)
    }
  }
}

export { DateTime, Brand, Model, Vehicle, Client }

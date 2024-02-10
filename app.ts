import { DateTime, Brand, Model, Vehicle, Client } from './models'

function prompt(question: string): Promise<string> {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise<string>(resolve => {
    readline.question(question, (answer: string) => {
      resolve(answer)
      readline.close()
    })
  })
}

async function promptNumber(question: string): Promise<number> {
  while (true) {
    const input = await prompt(question)
    const number = parseInt(input)
    if (!isNaN(number)) {
      return number
    } else {
      console.log('Write a valid number')
    }
  }
}

function getTodayDate(): DateTime {
  const today = new Date()
  const year = today.getFullYear().toString()
  let month = (today.getMonth() + 1).toString().padStart(2, '0')
  let day = today.getDate().toString().padStart(2, '0')

  return { date: `${year}-${month}-${day}`, time: '00:00' }
}

function calculateReturnDate(rentalDate: DateTime): DateTime {
  const returnDate = new Date(rentalDate.date)
  returnDate.setDate(returnDate.getDate() + 7)

  const year = returnDate.getFullYear().toString()
  let month = (returnDate.getMonth() + 1).toString().padStart(2, '0')
  let day = returnDate.getDate().toString().padStart(2, '0')

  return { date: `${year}-${month}-${day}`, time: '00:00' }
}

async function main() {
  console.log('Welcome to the vehicle rental system!\n')

  const clientName = await prompt('Enter client name: ')
  const clientEmail = await prompt('Enter client email: ')
  const clientPhoneNumber = await promptNumber('Enter client phone number: ')
  const client = new Client(clientName, clientEmail, clientPhoneNumber)

  const brandName = await prompt('Enter brand name: ')
  const brand = new Brand(brandName)

  const modelName = await prompt('Enter model name: ')
  const model = new Model(modelName, brand)

  const vehiclePlateID = await prompt('Enter vehicle plate ID: ')
  const vehicleColor = await prompt('Enter vehicle color: ')
  const vehicleYear = await promptNumber('Enter vehicle year: ')
  const vehicleFuelType = await prompt('Enter vehicle fuel type: ')
  const vehicleNumberOfDoors = await promptNumber(
    'Enter vehicle number of doors: '
  )
  const vehicleMileage = await promptNumber('Enter vehicle mileage: ')
  const vehicleRENAVAM = await promptNumber('Enter vehicle RENAVAM: ')
  const vehicleChassis = await prompt('Enter vehicle chassis: ')
  const vehicleRentalValue = await promptNumber('Enter vehicle rental value: ')

  const vehicle = new Vehicle(
    vehiclePlateID,
    vehicleColor,
    vehicleYear,
    vehicleFuelType,
    vehicleNumberOfDoors,
    vehicleMileage,
    vehicleRENAVAM,
    vehicleChassis,
    vehicleRentalValue,
    model
  )

  const rentalDate: DateTime = getTodayDate()
  const returnDate: DateTime = calculateReturnDate(rentalDate)

  client.rentVehicle(vehicle, rentalDate)
  console.log('\nVehicle rented successfully!')

  console.log('\nClient Information:')
  console.log(`Name: ${client.name}`)
  console.log(`Email: ${client.email}`)
  console.log(`Phone Number: ${client.phoneNumber}`)

  console.log('\nRented Vehicle Details:')
  console.log(`Plate ID: ${vehicle.plateID}`)
  console.log(`Brand: ${vehicle.model.brand.name}`)
  console.log(`Model: ${vehicle.model.name}`)
  console.log(`Color: ${vehicle.color}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Fuel Type: ${vehicle.fuelType}`)
  console.log(`Number of Doors: ${vehicle.numberOfDoors}`)
  console.log(`Mileage: ${vehicle.mileage}`)
  console.log(`RENAVAM: ${vehicle.RENAVAM}`)
  console.log(`Chassis: ${vehicle.chassis}`)
  console.log(`Rental Value: ${vehicle.rentalValue}`)
  console.log(`Rental Date: ${rentalDate.date} ${rentalDate.time}`)

  console.log('\nExpected Return Date:')
  console.log(`Date: ${returnDate.date} ${returnDate.time}`)
}

main()

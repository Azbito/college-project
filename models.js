"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Vehicle = exports.Model = exports.Brand = void 0;
var Model = /** @class */ (function () {
    function Model(name, brand, vehicles) {
        if (vehicles === void 0) { vehicles = []; }
        this.name = name;
        this.brand = brand;
        this.vehicles = vehicles;
        brand.addModel(this);
    }
    return Model;
}());
exports.Model = Model;
var Brand = /** @class */ (function () {
    function Brand(name, models) {
        if (models === void 0) { models = []; }
        this.name = name;
        this.models = models;
    }
    Brand.prototype.addModel = function (model) {
        this.models.push(model);
    };
    return Brand;
}());
exports.Brand = Brand;
var Vehicle = /** @class */ (function () {
    function Vehicle(plateNumber, color, year, fuelType, numberOfDoors, mileage, RENAVAM, chassis, rentalValue, model) {
        this.plateNumber = plateNumber;
        this.color = color;
        this.year = year;
        this.fuelType = fuelType;
        this.numberOfDoors = numberOfDoors;
        this.mileage = mileage;
        this.RENAVAM = RENAVAM;
        this.chassis = chassis;
        this.rentalValue = rentalValue;
        this.model = model;
        this.rented = false;
        model.vehicles.push(this);
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var Client = /** @class */ (function () {
    function Client(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.rentedVehicles = [];
    }
    Client.prototype.rentVehicle = function (vehicle, rentalDate) {
        vehicle.rented = true;
        vehicle.rentalDate = rentalDate;
        this.rentedVehicles.push(vehicle);
    };
    Client.prototype.returnVehicle = function (vehicle, returnDate) {
        vehicle.rented = false;
        vehicle.returnDate = returnDate;
        var index = this.rentedVehicles.indexOf(vehicle);
        if (index !== -1) {
            this.rentedVehicles.splice(index, 1);
        }
    };
    return Client;
}());
exports.Client = Client;

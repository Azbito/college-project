"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var readline = require("readline");
function prompt(question) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
            rl.close();
        });
    });
}
function pressEscToQuit() {
    console.log('Press ESC to quit');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (key) {
        if (key === '\u001b') {
            console.log('Exiting...');
            process.exit(0);
        }
    });
}
function calculateReturnDate(rentalDate) {
    var returnDate = new Date(rentalDate.date);
    returnDate.setDate(returnDate.getDate() + 7);
    var year = returnDate.getFullYear().toString();
    var month = (returnDate.getMonth() + 1).toString().padStart(2, '0');
    var day = returnDate.getDate().toString().padStart(2, '0');
    return { date: "".concat(year, "-").concat(month, "-").concat(day), time: '00:00' };
}
function getTodayDate() {
    var today = new Date();
    var year = today.getFullYear().toString();
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    return { date: "".concat(year, "-").concat(month, "-").concat(day), time: '00:00' };
}
function promptNumber(question) {
    return __awaiter(this, void 0, void 0, function () {
        var input, number;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, prompt(question)];
                case 1:
                    input = _a.sent();
                    number = parseInt(input);
                    if (!isNaN(number)) {
                        return [2 /*return*/, number];
                    }
                    else {
                        console.log('Write a valid number');
                    }
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var clientName, clientEmail, clientPhoneNumber, client, brandName, brand, modelName, model, vehiclePlateID, vehicleColor, vehicleYear, vehicleFuelType, vehicleNumberOfDoors, vehicleMileage, vehicleRENAVAM, vehicleChassis, vehicleRentalValue, vehicle, rentalDate, returnDate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Welcome to the vehicle rental system!\n');
                    return [4 /*yield*/, prompt('Enter client name: ')];
                case 1:
                    clientName = _a.sent();
                    return [4 /*yield*/, prompt('Enter client email: ')];
                case 2:
                    clientEmail = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter client phone number: ')];
                case 3:
                    clientPhoneNumber = _a.sent();
                    client = new models_1.Client(clientName, clientEmail, clientPhoneNumber);
                    return [4 /*yield*/, prompt('Enter brand name: ')];
                case 4:
                    brandName = _a.sent();
                    brand = new models_1.Brand(brandName);
                    return [4 /*yield*/, prompt('Enter model name: ')];
                case 5:
                    modelName = _a.sent();
                    model = new models_1.Model(modelName, brand);
                    return [4 /*yield*/, prompt('Enter vehicle plate ID: ')];
                case 6:
                    vehiclePlateID = _a.sent();
                    return [4 /*yield*/, prompt('Enter vehicle color: ')];
                case 7:
                    vehicleColor = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter vehicle year: ')];
                case 8:
                    vehicleYear = _a.sent();
                    return [4 /*yield*/, prompt('Enter vehicle fuel type: ')];
                case 9:
                    vehicleFuelType = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter vehicle number of doors: ')];
                case 10:
                    vehicleNumberOfDoors = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter vehicle mileage: ')];
                case 11:
                    vehicleMileage = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter vehicle RENAVAM: ')];
                case 12:
                    vehicleRENAVAM = _a.sent();
                    return [4 /*yield*/, prompt('Enter vehicle chassis: ')];
                case 13:
                    vehicleChassis = _a.sent();
                    return [4 /*yield*/, promptNumber('Enter vehicle rental value: ')];
                case 14:
                    vehicleRentalValue = _a.sent();
                    vehicle = new models_1.Vehicle(vehiclePlateID, vehicleColor, vehicleYear, vehicleFuelType, vehicleNumberOfDoors, vehicleMileage, vehicleRENAVAM, vehicleChassis, vehicleRentalValue, model);
                    rentalDate = getTodayDate();
                    returnDate = calculateReturnDate(rentalDate);
                    client.rentVehicle(vehicle, rentalDate);
                    console.log('\nVehicle rented successfully!');
                    console.log('\nClient Information:');
                    console.log("Name: ".concat(client.name));
                    console.log("Email: ".concat(client.email));
                    console.log("Phone Number: ".concat(client.phoneNumber));
                    console.log('\nRented Vehicle Details:');
                    console.log("Plate ID: ".concat(vehicle.plateID));
                    console.log("Brand: ".concat(vehicle.model.brand.name));
                    console.log("Model: ".concat(vehicle.model.name));
                    console.log("Color: ".concat(vehicle.color));
                    console.log("Year: ".concat(vehicle.year));
                    console.log("Fuel Type: ".concat(vehicle.fuelType));
                    console.log("Number of Doors: ".concat(vehicle.numberOfDoors));
                    console.log("Mileage: ".concat(vehicle.mileage));
                    console.log("RENAVAM: ".concat(vehicle.RENAVAM));
                    console.log("Chassis: ".concat(vehicle.chassis));
                    console.log("Rental Value: ".concat(vehicle.rentalValue));
                    console.log("Rental Date: ".concat(rentalDate.date, " ").concat(rentalDate.time));
                    console.log('\nExpected Return Date:');
                    console.log("Date: ".concat(returnDate.date, " ").concat(returnDate.time));
                    pressEscToQuit();
                    return [2 /*return*/];
            }
        });
    });
}
main();

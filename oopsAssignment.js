// # Assignment
// ## Employee Management System

// Create Employee class with name, id, #salary.
// Subclasses: Manager, Engineer, Intern.
// Polymorphism: Override calculateBonus() for each role.

class Employee{
    #salary;
    constructor(name='John Doe',id=0,salary=100){
        this.name = name;
        this.id = id;
        this.#salary = salary; 
    }

    calculateBonus(){
        return (this.#salary);
    }
    getSal(){
        return this.#salary;
    }
}

class Manager extends Employee{
    constructor(name,id,salary,department){
        super(name,id,salary);
        this.department = department;
    }
    calculateBonus(){
        return this.getSal()*1.25 - this.getSal();
    }
}

class Engineer extends Employee{
    constructor(name,id,salary,project){
        super(name,id,salary);
        this.project = project;
    }
    calculateBonus(){
        return this.getSal()*1.25 - this.getSal();
    }
}

class Intern extends Employee{
    constructor(name,id,salary,superviser){
        super(name,id,salary);
        this.superviser=superviser;
    }
    calculateBonus(){
        return this.getSal()*1.25 - this.getSal();
    }
}

const emp1 = new Employee();

const manager1 = new Manager('Johnathan Williams',6,560000,'HR');
const engineer1 = new Engineer('Hoshiyumi Nagumo',1,450000,'Surgical Robot');
const intern1 = new Intern('Ulysses Yggrite',2,16000,engineer1);


console.log(emp1);
console.log(`${emp1.name}`,'bonus : ',emp1.calculateBonus());
console.log(manager1);
console.log(`${manager1.name} for the ${manager1.department} department`,'bonus : ',manager1.calculateBonus());
console.log(engineer1);
console.log(`${engineer1.name} working on ${engineer1.project}`,'bonus : ',engineer1.calculateBonus());
console.log(intern1);
console.log(`${intern1.name} supervised by ${intern1.superviser}`,'bonus : ',intern1.calculateBonus());


// ## Vehicle Rental System

// Create Vehicle class with brand, model, rentPricePerDay.
// Subclasses: Car, Bike, Truck.
// Polymorphism: Implement calculateRentalCost(days).


class Vehicle {
    constructor(brand,model,rentPricePerDay){
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = Number(rentPricePerDay);
    }
}

class Car extends Vehicle{
    constructor(brand,model,rentPricePerDay, seats=4,color){
        super(brand,model,rentPricePerDay);
        this.seats = Number(seats);
        this.color = color;
    }

    calculateRentalCost(days){
        return this.rentPricePerDay * Number(days) * (this.seats * 0.5);
    }
}

class Bike extends Vehicle{
    constructor(brand,model,rentPricePerDay,type){
        super(brand,model,rentPricePerDay);
        this.type = type;
    }

    calculateRentalCost(days){
        let additionalCost = 0;
        if(this.type === 'sports') additionalCost = 250;
        if(this.type === 'chopper') additionalCost = 350;
        if(this.type === 'economy') additionalCost = 100;
        return (this.rentPricePerDay * Number(days) )+ additionalCost;
    }
}

class Truck extends Vehicle{
    constructor(brand,model,rentPricePerDay,extension){
        super(brand,model,rentPricePerDay);
        this.extension = extension;
    }

    calculateRentalCost(days){
        return (this.rentPricePerDay * days) + (this.extension ? 150 : 0);
    }
}

const vehicle1 = new Vehicle('Hayato','B537',90)
const car1 = new Car('Toyota','Essilion',250,4,'moon silver')
const bike1 = new Bike('Suzuki','Crescent',130,'sports');
const truck1 = new Truck('Mercedeze','750TWS',670,true);

console.log(vehicle1);
console.log(car1);
console.log(car1.calculateRentalCost(43));
console.log(bike1.calculateRentalCost(23));
console.log(truck1.calculateRentalCost(67));


// ## Online Payment System

// Create Payment class with amount, date.
// Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
// Abstraction: Hide sensitive details like #cardNumber.


class Payment{
    constructor(amount,date){
        this.amount = Number(amount);
        this.date = new Date(date);
    }
    payMoney(){
        console.log(`Amount : ${this.amount} transaction Date : ${this.date}`);
    }
}

class CreditCardPayment extends Payment{
    #cardNumber;
    #pin;
    constructor(amount,date,accountHolder,cardNumber,pin){
        super(amount,date);
        this.accountHolder = accountHolder;
        this.#cardNumber = cardNumber;
        this.#pin = pin;
    }
}

class PayPalPayment extends Payment {
    #cardNumber;
    #password;
    constructor(amount,date,userId,email,cardNumber,password){
        super(amount,date);
        this.userId = userId;
        this.email = email;
        this.#password = password;
        this.#cardNumber = cardNumber;
    }
}


// wallet address instead of private and public keys separately

class CryptoPayment extends Payment { 
    #privateKey;
    constructor(amount,date,privateKey,publicKey,type){
        super(amount,date);
        this.#privateKey = privateKey;
        this.publicKey = publicKey;
        this.type = type;
    }

}
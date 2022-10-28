let Name = "SHEROZ";
console.log(Name == "SHEROZ");

let complection = "Brown";
console.log(complection != "Brown");

let School = "Taj SchOol";
console.log(School.toLowerCase() == "Taj SchOol");
console.log(School.toLowerCase() == "Taj SchOol".toLowerCase());

let Salary = 50000;
console.log(`Is my Salary > 20000?`);
console.log(Salary > 20000);

let myAge = 23;
console.log(`Is myAge > 25?`);
console.log(myAge > 25);

let price = 200;
console.log(price < 200);

let noOfFans = 5;
console.log(noOfFans < 5);

let bikeModel = "2007";
console.log(`Is bikeModel <= 2000`);
console.log(bikeModel <= 2000);

let engine = 70;
console.log(`Is enginePower is >= 125`);
console.log(engine >= 125);

let age = 18;
let Nationality = "Pakistani";
console.log(
  age == 18 && Nationality == "Pakistani"
    ? "Process Nationality"
    : "You are not Adult"
);

let age1 = 17;
let Nationality1 = "Pakistani";
console.log(
  age1 == 18 && Nationality1 == "Pakistani"
    ? "Process Nationality"
    : "You are not allowed be a Pakistani NIC "
);

let age2 = 17;
let Nationality2 = "Pakistani";
console.log(
  age2 == 16 || Nationality2 == "American"
    ? "Process Nationality"
    : "You are not allowed be a Pakistani NIC "
);

let friends = ["Ashar", "Bilal", "Hassan", "Somo", "Sajid"];
console.log(friends.includes("Ashar"));
console.log(friends.includes("Amaan"));

let guestList = ["sheroz", "ashar", "hassan"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}

console.log("Hey guys I have order a bigger dinning table");


guestList.unshift("asif");


guestList.push("Asim");


guestList.splice(1, 0, "Aarish");

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}

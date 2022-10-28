let guestList = ["sheroz", "ashar", "hassan"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}

sickGuest = guestList.splice(2, 1, "aarish");
console.log(
  `Hey guys unfortunately ${sickGuest} Bhai is Sick today, He can't Join us today`
);
console.log("Inviting friends Again");

for (let i = 0; i < guestList.length; i++) {
  console.log(`hey ${guestList[i]}, lets have a dinner at my place`);
}

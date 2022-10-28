let locations = ["Peshawar", "Quetta", "Karachi", "Islamabad", "Lahore"];

console.log("Array in Non Alphabetical Order", locations);

console.log("Sorted the Array Without Modifying it", locations.slice().sort());

console.log("Array in Original Condition", locations);

console.log(
  "Sorted the Array in Reverse Alphabetical Order",
  locations.slice().sort().reverse()
);

console.log("Array in Original Condition", locations);

console.log(
  "Sorted the Array in Reverse Alphabetical Order by Modifying it",
  locations.reverse()
);

console.log("Reversed the Array Again", locations.reverse());

console.log("Sorted the Array while modifying an array", locations.sort());
console.log(
  "Reversing the Sorted Array while modifying an array",
  locations.sort().reverse()
);

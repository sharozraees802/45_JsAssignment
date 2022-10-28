const name = "muhammad sheroz raees";

//  lower case
console.log(name.toLowerCase());

//  upper case
console.log(name.toUpperCase());

//  title case

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(titleCase(name));

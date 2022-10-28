let magiciannames = ["Harry Houdini", "David Copperfield", "Teller"];

function showmagicians(magicianname) {
  for (let i = 0; i < magicianname.length; i++) {
    console.log(magicianname[i]);
  }
}

function makegreat(magicianname) {
  let greatmagicians = [];
  magicianname.map((magname) => {
    magname1 = magname + " The Great";
    greatmagicians.push(magname1);
  });
  console.log(greatmagicians);

  magiciannames = greatmagicians;
  return magiciannames;
}

showmagicians(magiciannames);
makegreat(magiciannames);
console.log(magiciannames);

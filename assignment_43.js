let magiciannames = ["Harry Houdini", "David Copperfield", "Teller"];


function show_magicians(magicianname) {
  for (let i = 0; i < magicianname.length; i++) {
    console.log(magicianname[i]);
  }
}

function make_great(magicianname) {
  let great_magicians = [];
  magicianname.map((mag_name) => {
    mag_name1 = mag_name + " The Great";
    great_magicians.push(mag_name1);
  });
  console.log(great_magicians);

  return magiciannames;
}

show_magicians(magiciannames);
make_great(magiciannames);
console.log("Original Magicians");
console.log(magiciannames);

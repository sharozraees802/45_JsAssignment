function makesandwich(...items) {
  items.map((item) => {
    console.log(`Adding ${item} to your Sandwich`);
  });
  console.log("Your Sandwich is Ready");
}

makesandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
makesandwich("turkey", "apple slices", "honey mustard");
makesandwich("peanut butter", "strawberry jam");

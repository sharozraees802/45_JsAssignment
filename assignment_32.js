let currentusers = ["sheroz", "zubair", "huzaifa", "hassan", "anas", "naeem"];

let newusers = ["naseer", "murtaza", "zubair", "anas", "wajid"];

newusers.map((user) => {
  if (currentusers.includes(user)) {
    console.log(`Sorry the user name ${user} has already been taken`);
  } else {
    console.log(`Congratulations the user name ${user} is still available`);
  }
});

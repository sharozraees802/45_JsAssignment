let users = ["admin", "sheroz", "ashar", "huzifa", "hassan"];

let greet = users.map((user) => {
  if (user == "admin") {
    console.log("Hello Admin ? Would you like to see some status report");
  } else if (user == "sheroz") {
    console.log("Hello " + user + " thank you for logging in again");
  } else if (user == "ashar") {
    console.log("Hello " + user + " thank you for logging in again");
  } else if (user == "ashar") {
    console.log("Hello " + user + " thank you for logging in again");
  } else if (user == "huzifa") {
    console.log("Hello " + user + " thank you for logging in again");
  } else if (user == "hassan") {
    console.log("Hello " + user + " thank you for logging in again");
  } else {
    console.log("we need to find some users");
  }
});

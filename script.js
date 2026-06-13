function sayHello() {
  const messages = [
    "Hey there! Thanks for visiting 😄",
    "You just ran JavaScript. Welcome to web dev!",
    "This button does something — because YOU made it!",
    "Keep clicking... go on 😏"
  ];

  // Pick a random message each time
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[random];
}
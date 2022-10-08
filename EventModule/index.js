const EventEmitter = require("events");
const event = new EventEmitter();

event.on("myName", () => {
  console.log("Who's there ?");
});
event.on("myName", () => {
  console.log("Madaan Sahaab here");
});
event.on("myName", () => {
  console.log("Chotu where ?");
});

// Kinda func call always after func defination urf event.on
event.emit("myName");
// event.emit("myName");

//2nd use of event by sending parameters

event.on("checkPage", (sc, msg) => {
  console.log(`Status code ${sc} working ${msg}`);
  c;
});
event.emit("checkPage", 200, "ok");

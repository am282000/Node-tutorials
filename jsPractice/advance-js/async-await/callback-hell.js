// Callback k ander callback try to avoid this by fetch api

setTimeout(() => {
  console.log("work 1");
  setTimeout(() => {
    console.log("work 2");
    setTimeout(() => {
      console.log("work 3");
      setTimeout(() => {
        console.log("work 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

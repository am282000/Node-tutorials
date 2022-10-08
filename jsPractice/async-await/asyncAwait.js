const jokes = document.querySelector("#jokes");
const nextJoke = document.querySelector("#nextJoke");

const generateJoke = async () => {
  try {
    let apiURL = "https://icanhazdadjoke.com/";
    const sendHeaders = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch(apiURL, sendHeaders);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

nextJoke.addEventListener("click", generateJoke);
generateJoke();

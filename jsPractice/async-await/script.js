// With promises
// fetch(url,header).then((res)=> res.json()).then((data)=>jokes.innerHTML = data.joke)
//.catch((e)=>console.log(e))

const jokes = document.querySelector("#jokes");
const nextJoke = document.querySelector("#nextJoke");

const generateJoke = () => {
  let apiURL = "https://icanhazdadjoke.com/";
  const setHeader = {
    // Need to set headers else it will give all HTML content
    headers: {
      Accept: "application/json",
    },
  };
  fetch(apiURL, setHeader)
    .then(
      (res) => res.json() // By default it fetch the promise in HTML format
      //.json will convert the code in javascript format
    )
    .then((data) => (jokes.innerHTML = data.joke))
    .catch((err) => console.error(err));
};

nextJoke.addEventListener("click", generateJoke);
generateJoke();

import { getJoke } from './jokes.js'

function displayJokes() {
  const jokes = JSON.parse(localStorage.jokes || "[]");
  const ul = document.querySelector("ul");
  ul.innerHTML = ''
  jokes.forEach((joke) => {
    const li = document.createElement("li");
    li.innerText = joke;
    ul.appendChild(li);
  });
}

function get5jokes() {
  const jokePromises = [];

  for (let i = 0; i < 5; i++) {
    jokePromises.push(getJoke());
  }

  Promise.all(jokePromises).then((jokes) => {
    const oldJokes = JSON.parse(localStorage.jokes || "[]");
    localStorage.jokes = JSON.stringify(oldJokes.concat(jokes));
    displayJokes()
  });
}

document.querySelector("button").addEventListener("click", get5jokes);

displayJokes()

// async function asyncGetJoke() {
//   const result = await getJoke()
//   return 42
// }

// console.log(asyncGetJoke())

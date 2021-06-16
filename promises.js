// function adder(x, y) {
//   return new Promise((resolve, reject) => {
//     let answer = x + y;

//     if (isNaN(answer)) {
//       reject(`Input must be numeric, received (${x}, ${y})`);
//     }

//     resolve(answer);
//   });
// }

// adder(5, 9)
//   .then((data) => adder(data, "hi"))
//   .then((data) => console.log(`The answer is ${data}`))
//   .catch((err) => console.log(err));

function getJoke() {
  return new Promise((resolve, reject) => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.joke) {
          resolve(data.joke);
        }

        reject(new Error("Could not retrieve joke!"));
      });
  });
}

document.querySelector("button").addEventListener("click", (e) => {
  document.querySelector("#jokes").innerHTML = "";
  let jokePromises = []; //[getJoke(), getJoke(), getJoke(), getJoke(), getJoke()]
  for (let i = 0; i < 5; jokePromises.push(getJoke()), i++) {}
  // console.log(jokePromises)

  Promise.all(jokePromises)
    .then((jokes) => {
      jokes.forEach((value, index) => {
        document.querySelector("#jokes").innerHTML += `<p>${
          index + 1
        }. ${value}</p>`;
      });
    })
    .catch((err) => console.log(err));

  // getJoke()
  // .then((joke) => {
  //   document.querySelector("#jokes").innerHTML += `<p>1. ${joke}</p>`;
  //   return getJoke();
  // })
  // .then((joke) => {
  //   document.querySelector("#jokes").innerHTML += `<p>2. ${joke}</p>`;
  //   return getJoke();
  // })
  // .then((joke) => {
  //   document.querySelector("#jokes").innerHTML += `<p>3. ${joke}</p>`;
  //   return getJoke();
  // })
  // .then((joke) => {
  //   document.querySelector("#jokes").innerHTML += `<p>4. ${joke}</p>`;
  //   return getJoke();
  // })
  // .then((joke) => {
  //   document.querySelector("#jokes").innerHTML += `<p>5. ${joke}</p>`;
  // })
  // .catch((err) => console.log(err));
});

fetch("http://randomuser.me/api")
    .then(res => res.json())
    .then(data => console.log(data))

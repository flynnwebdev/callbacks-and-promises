// function adder(x, y, foo) {
//   let answer = x + y;
//   setTimeout(function () {
//     foo(answer);
//   }, 3000);
//   console.log("Finished adder");
// }

// function doAlert(x) {
//   alert(x);
// }

// adder(4, 7, (x) => console.log(`The answer is ${x}`));
// console.log("Finished main")
// // adder(5, 10, doAlert);

document.querySelector("button").addEventListener("click", (e) => {
  document.querySelector("#jokes").innerHTML = "";
  $.getJSON("https://icanhazdadjoke.com/", (data) => {
    document.querySelector("#jokes").innerHTML += `<p>1. ${data.joke}</p>`;
    $.getJSON("https://icanhazdadjoke.com/", (data) => {
      document.querySelector("#jokes").innerHTML += `<p>2. ${data.joke}</p>`;
      $.getJSON("https://icanhazdadjoke.com/", (data) => {
        document.querySelector("#jokes").innerHTML += `<p>3. ${data.joke}</p>`;
        $.getJSON("https://icanhazdadjoke.com/", (data) => {
          document.querySelector(
            "#jokes"
          ).innerHTML += `<p>4. ${data.joke}</p>`;
          $.getJSON("https://icanhazdadjoke.com/", (data) => {
            document.querySelector(
              "#jokes"
            ).innerHTML += `<p>5. ${data.joke}</p>`;
          });
        });
      });
    });
  });
});

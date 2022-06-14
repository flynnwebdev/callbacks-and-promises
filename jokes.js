export async function getJoke() {
  function reject() {
    throw new Error("Could not retrieve joke!");
  }

  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();

    if (data.joke) {
      return data.joke;
    } else {
      reject();
    }
  } catch {
    reject();
  }
}

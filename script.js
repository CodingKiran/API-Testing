const root = document.getElementById("root");

async function fetData() {
  const data = await fetch("https://official-joke-api.appspot.com/random_joke");
  const response = await data.json();
  const setup = document.createElement("p");
  const punch = document.createElement("p");
  setup.innerText = response.setup;
  punch.innerText = response.punchline;
  root.appendChild(setup);
  root.appendChild(punch);
  console.log(response);
}

fetData();

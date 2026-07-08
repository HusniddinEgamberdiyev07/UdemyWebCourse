// https://swapi.dev/api/people/1

// this is a relic don't use it

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Loaded");
  const data = JSON.parse(this.responseText);
  // console.log(data.result.properties.name);
  // console.log(data.result.properties.height);
};

req.onerror = function () {
  console.log("Error");
  console.log("this");
};

req.open("GET", "https://swapi.tech/api/people/1");
req.send();

// newest fetch api

// fetch("url") this returns a promise
// .then(callback) this returns response and we can get the body using res.json()
// res.json() returns a promise

fetch("https://swapi.tech/api/people/1")
  .then((res) => {
    console.log("First request resolved.");
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((err) => console.log("Something went wrong."));

// chain request

fetch("https://swapi.tech/api/people/1")
  .then((res) => {
    // console.log("First request resolved.");
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    // console.log("Data: ", data);
    return fetch("https://swapi.tech/api/people/2");
  })
  .then((res) => {
    // console.log("Sdecond request resolved.");
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    // console.log("Data: ", data);
  })
  .catch((err) => console.log("Something went wrong."));

// best version with async&aiwat

async function getPeople() {
  try {
    const res = await fetch("https://swapi.tech/api/people/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.tech/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log(e);
  }
}

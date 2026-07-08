// https://swapi.dev/api/people/1

// this is a relic don't use it

const req = new XMLHttpRequest();

req.onload = function(){
    console.log("Loaded");
    const data = JSON.parse(this.responseText)
    console.log(data.result.properties.name);
    console.log(data.result.properties.height);
}

req.onerror = function(){
    console.log("Error");
    console.log("this");
}

req.open("GET", "https://swapi.tech/api/people/1");
req.send()


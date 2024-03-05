function getLocation() {
  const x = document.getElementById("geodemo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => showPosition(x, position));
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(element, position) {
  element.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Accuracy: " + position.coords.accuracy + "<br>Altitude: " + position.coords.altitude + "<br>Speed: " + position.coords.speed;
}

function getLocation2() {
  const y = document.getElementById("geodemo2");
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => showPosition(y, position));
  } else {
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

fetch(apiUrl)
  .then(response => response.json())
  .then((json) => {
    alert(JSON.stringify(json));
    document.getElementById("geo2").innerHTML = JSON.stringify(json);
  });

const url2 = 'https://jsonplaceholder.typicode.com/todos/10';

const data = { title: "The Matrix", year: "1994" };

fetch(
  url2,
  {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    method: "POST"
  }
)
  .then(response => response.json())
  .then((json) => {
    alert(JSON.stringify(json));
    document.getElementById("geo3").innerHTML = JSON.stringify(json);
  });

fetch('https://cdn.pixabay.com/photo/2023/10/30/05/19/sunflowers-8351807_1280.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    const myImage = document.querySelector('img');
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


const request = new XMLHttpRequest();

const apiUrl2 = 'https://jsonplaceholder.typicode.com/todos/19';
request.open("GET", apiUrl2);
request.send();

request.onload = (e) => {
  alert(request.response);
  document.getElementById("canvas").innerHTML = request.response;
}
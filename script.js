// dependence
let input = $("#searching");
let button = $("button");
let cityCollector = $("#cityCollect");
let cityName = [];
apiKey = "7b80215f2592be31ee5ecbe7b3f91df1";
//functions
function temperatureFahrenheit(data) {
  return (((data - 273.15) * 9) / 5 + 32).toFixed(2);
}

function convertUnixToDateTime(unixTimestamp) {
  let dateObject = new Date(unixTimestamp * 1000);

  let year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let day = dateObject.getDate();

  let formattedDateTime = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  return formattedDateTime;
}

function getApi() {
  input.val = "new york";
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.val}&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //current day
      $(".card1 ul li#city").text(
        `(${data.city.name} ${convertUnixToDateTime(data.list[0].dt)})`
      );
      $(".card1 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[0].main.temp)}\u2109`
      );
      $(".card1 ul li#wind").text(`wind:${data.list[0].wind.speed}MPH`);
      $(".card1 ul li#humidity").text(
        `humidity:${data.list[0].main.humidity}%`
      );
      //coming days 1
      $(".card2 ul li#date").text(`${convertUnixToDateTime(data.list[8].dt)}`);
      $(".card2 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[8].main.temp)}\u2109`
      );
      $(".card2 ul li#wind").text(`wind:${data.list[8].wind.speed}MPH`);
      $(".card2 ul li#humidity").text(
        `humidity:${data.list[8].main.humidity}%`
      );
      //coming days 2
      $(".card3 ul li#date").text(`${convertUnixToDateTime(data.list[16].dt)}`);
      $(".card3 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[16].main.temp)}\u2109`
      );
      $(".card3 ul li#wind").text(`wind:${data.list[16].wind.speed}MPH`);
      $(".card3 ul li#humidity").text(
        `humidity:${data.list[16].main.humidity}%`
      );
      //coming days 3
      $(".card4 ul li#date").text(`${convertUnixToDateTime(data.list[24].dt)}`);
      $(".card4 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[24].main.temp)}\u2109`
      );
      $(".card4 ul li#wind").text(`wind:${data.list[24].wind.speed}MPH`);
      $(".card4 ul li#humidity").text(
        `humidity:${data.list[24].main.humidity}%`
      );
      //coming days 4
      $(".card5 ul li#date").text(`${convertUnixToDateTime(data.list[32].dt)}`);
      $(".card5 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[32].main.temp)}\u2109`
      );
      $(".card5 ul li#wind").text(`wind:${data.list[32].wind.speed}MPH`);
      $(".card5 ul li#humidity").text(
        `humidity:${data.list[32].main.humidity}%`
      );
      //coming days 5
      $(".card6 ul li#date").text(`${convertUnixToDateTime(data.list[39].dt)}`);
      $(".card6 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[39].main.temp)}\u2109`
      );
      $(".card6 ul li#wind").text(`wind:${data.list[39].wind.speed}MPH`);
      $(".card6 ul li#humidity").text(
        `humidity:${data.list[39].main.humidity}%`
      );
    });
}
getApi();
//storage
function getCity() {
  // check to see if cityName already exists in local storage
  // if it already exists, you need to parse the existing array
  // then add new city
  // then stringify
  // then set localstorage to new array
  // if it doesn't exist yet
  // use new array and add new city to it
  // then stringify
  // then set localstorage
  localStorage.setItem("cityName", JSON.stringify(input.val));
  cityName = cityName.push(input.val);
}
function saveCity() {
  let cityHolder = JSON.parse(localStorage.getItem("cityName"));
  // loop through cityholder
  for (let i = 0; i < cityName.length; i++) {
    const listItem = $("<li>");
    listItem.text(cityName[i]);
    cityCollector.append(listItem);
  }
}

//interaction

// dependence
let input = $("#searching");
let button = $("button");
let cityCollector = $("#cityCollect");
let cityName = [];
let cityHolder = [];
apiKey = "7b80215f2592be31ee5ecbe7b3f91df1";
//functions
$(document).ready(function () {
  let defaultCity = localStorage.getItem("defaultCity");

  if (!defaultCity) {
    defaultCity = "new york";
    localStorage.setItem("defaultCity", defaultCity);
  }
  input.val(defaultCity);

  getApi();
});

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

function icon(iconID) {
  let iconUrl = `https://openweathermap.org/img/wn/${iconID}.png`;

  let imgEl = $("<img>");
  imgEl.attr("src", iconUrl);
  return imgEl;
}

function getApi() {
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.val()}&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //current day
      let list0 = data.list[0];
      $(".card1 ul li#city").text(
        `(${data.city.name} ${convertUnixToDateTime(list0.dt)})`
      );
      $(".card1 ul li#icon").append(icon(list0.weather[0].icon));
      $(".card1 ul li#temp").text(
        `temp:${temperatureFahrenheit(list0.main.temp)}\u2109`
      );
      $(".card1 ul li#wind").text(`wind:${list0.wind.speed}MPH`);
      $(".card1 ul li#humidity").text(`humidity:${list0.main.humidity}%`);
      //coming days 1
      let list8 = data.list[8];
      $(".card2 ul li#date").text(`${convertUnixToDateTime(list8.dt)}`);
      $(".card2 ul li#icon").append(icon(list8.weather[0].icon));
      $(".card2 ul li#temp").text(
        `temp:${temperatureFahrenheit(list8.main.temp)}\u2109`
      );
      $(".card2 ul li#wind").text(`wind:${list8.wind.speed}MPH`);
      $(".card2 ul li#humidity").text(`humidity:${list8.main.humidity}%`);
      //coming days 2
      let list16 = data.list[16];
      $(".card3 ul li#date").text(`${convertUnixToDateTime(list16.dt)}`);
      $(".card3 ul li#icon").append(icon(list16.weather[0].icon));
      $(".card3 ul li#temp").text(
        `temp:${temperatureFahrenheit(list16.main.temp)}\u2109`
      );
      $(".card3 ul li#wind").text(`wind:${list16.wind.speed}MPH`);
      $(".card3 ul li#humidity").text(`humidity:${list16.main.humidity}%`);
      //coming days 3
      let list24 = data.list[24];
      $(".card4 ul li#date").text(`${convertUnixToDateTime(list24.dt)}`);
      $(".card4 ul li#icon").append(icon(list24.weather[0].icon));
      $(".card4 ul li#temp").text(
        `temp:${temperatureFahrenheit(list24.main.temp)}\u2109`
      );
      $(".card4 ul li#wind").text(`wind:${list24.wind.speed}MPH`);
      $(".card4 ul li#humidity").text(`humidity:${list24.main.humidity}%`);
      //coming days 4
      let list32 = data.list[32];
      $(".card5 ul li#date").text(`${convertUnixToDateTime(list32.dt)}`);
      $(".card5 ul li#icon").append(icon(list32.weather[0].icon));
      $(".card5 ul li#temp").text(
        `temp:${temperatureFahrenheit(list32.main.temp)}\u2109`
      );
      $(".card5 ul li#wind").text(`wind:${list32.wind.speed}MPH`);
      $(".card5 ul li#humidity").text(`humidity:${list32.main.humidity}%`);
      //coming days 5
      let list39 = data.list[39];
      $(".card6 ul li#date").text(`${convertUnixToDateTime(list39.dt)}`);
      $(".card6 ul li#icon").append(icon(list39.weather[0].icon));
      $(".card6 ul li#temp").text(
        `temp:${temperatureFahrenheit(list39.main.temp)}\u2109`
      );
      $(".card6 ul li#wind").text(`wind:${list39.wind.speed}MPH`);
      $(".card6 ul li#humidity").text(`humidity:${list39.main.humidity}%`);
    });
}
//storage
function getCity() {
  let cityName = input.val().trim();
  if (cityName && !cityHolder.includes(cityName)) {
    cityHolder.push(cityName);
    localStorage.setItem("cityName", JSON.stringify(cityHolder));
  }
}

function saveCity() {
  let cityHolder = JSON.parse(localStorage.getItem("cityName")) || [];
  cityCollector.empty();
  for (let i = 0; i < cityHolder.length; i++) {
    const listItem = $("<li>");
    listItem.text(cityHolder[i]);
    cityCollector.append(listItem);
  }
}

function setInput(event) {
  event.preventDefault;

  getCity();
  saveCity();
  getApi();
}
//interaction
button.on("click", setInput);

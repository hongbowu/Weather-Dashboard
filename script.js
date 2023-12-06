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
function getApi() {
  input.val = "new york";
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.val}&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $(".card1 ul li#city").text(data.city.name);
      $(".card1 ul li#temp").text(
        `temp:${temperatureFahrenheit(data.list[0].main.temp)}\u2109`
      );
      $(".card1 ul li#wind").text(`wind:${data.list[0].wind.speed}MPH`);
      $(".card1 ul li#humidity").text(
        `humidity:${data.list[0].main.humidity}%`
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
function logCity() {
  let cityHolder = JSON.parse(localStorage.getItem("cityName"));
  // loop through cityholder
  const listItem = $("<li>");
  listItem.text();
  cityCollector.append(listItem);
}

//interaction

// dependence
let input = $("#searching");
let button = $("button");
let cityCollector = $("#cityCollect");
let cityName = [];
apiKey = "7b80215f2592be31ee5ecbe7b3f91df1";
//functions
function getApi() {
  input.val = "new york";
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?d=5q=${input.val}&appid=${apiKey}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
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

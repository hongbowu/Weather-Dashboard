// dependence
let input = $("#searching");
let button = $("button");
let cityCollector = $("#cityCollect");
let cityName = [];
//functions
function getApi() {
  cityName = "Newyork";
  let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=7b80215f2592be31ee5ecbe7b3f91df1`;
  fetch(requestUrl)
    .then(function (response) {
      response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getApi();
//storage
function getCity() {
  localStorage.setItem("cityName", JSON.stringify(input.val));
  cityName = cityName.push(input.val);
}
function logCity() {
  let cityHolder = JSON.parse(localStorage.getItem("cityName"));
  let newList = cityCollector.add("li");
  newList.text = input.val;
}
//interaction

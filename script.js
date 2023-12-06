// dependence
let input = $("#searching");
let button = $("button");
let cityCollector = $("#cityCollect");
let cityName = [];
//functions
function getApi() {
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=7b80215f2592be31ee5ecbe7b3f91df1`;
  fetch(requestUrl)
    .then(function (response) {
      response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
//storage

//interaction

// select html element
let cityName = document.getElementById("label1");
let areaName = document.getElementById("label2");
let error1 = document.querySelector(".error");
let error2 = document.querySelector(".error1");
let dispalyButton = document.getElementById("display1");
let time = document.querySelector(".currectTime");
let day = document.querySelector(".day1");
let countryDisplay = document.getElementById("countryDisplay");
let displayZipCode = document.getElementById("displayZipCode");
let userAnswer = document.getElementById("answerUser");


// working for the day area
let date = new Date();
let weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let week = weekName[date.getDay()];
day.textContent = week;

//working on time area
setInterval(timeaaa, 1000);
function timeaaa() {
    let date1 = new Date();
    let hours = date1.getHours();
    let minut = date1.getMinutes();
    let second = date1.getSeconds();
    if(hours === 0){
        hours = 1;
    }
    hours = hours > 12? hours - 12 : hours;
    time.textContent = `${hours}:${minut}:${second}`;
}
// after clicking some action berform through button 
dispalyButton.addEventListener("click", function () {
  // variable declear
  let city, area, convert, convert1;
  // assign value to variable 
  city = cityName.value;
  area = areaName.value;
  convert1 = city.toLowerCase();
  convert = area.toUpperCase();
  // condition city input area for error message 
  if (city === "" || !isNaN(city)) {
    error1.classList.add("none1");
  } else if (city !== "" || isNaN(city)) {
    error1.classList.remove("none1");
  }
  // condition city input area for error message 
  if (area === "" || !isNaN(area)) {
    error2.classList.add("none1");
  } else if (area !== "" || isNaN(area)) {
    error2.classList.remove("none1");
  }
  // switch for katch result
  switch (convert1) {
    case "karachi":
      switch (convert) {
        case "BUFFER ZONE":
          userAnswer.textContent = 75850;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "BALDIA TOWN":
          userAnswer.textContent = 75760;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "KARACHI BOARD OF SECONDARY EDUCATION":
          userAnswer.textContent = 75990;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "LIAQATABAD":
          userAnswer.textContent = 75900;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "MANGHOPIR":
          userAnswer.textContent = 75890;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "METROVILLE":
          userAnswer.textContent = 75840;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "NAZIMABAD":
          userAnswer.textContent = 74600;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "NEW KARACHI":
          userAnswer.textContent = 75850;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
        case "ORANGI TOWN":
          userAnswer.textContent = 75800;
          countryDisplay.textContent = city;
          displayZipCode.textContent = area;
          break;
      }
      break;
    case "islamabad":
        switch (convert) {
            case "ALI PUR FRASH":
              userAnswer.textContent = 45600;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "BAGNIAL":
              userAnswer.textContent = 45240;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "BARA KAU":
              userAnswer.textContent = 45400;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;  
        }
    break;
    case "lahore":
        switch (convert) {
            case "BATA PUR":
              userAnswer.textContent = 53400;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "FEROZEPUR ROAD LAHORE":
              userAnswer.textContent = 54600;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "GULBERG COLONY":
              userAnswer.textContent = 54660;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;  
        }
    break;
    case "quetta":
        switch (convert) {
            case "ALI TOWN":
              userAnswer.textContent = 87340;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "CHAMAN":
              userAnswer.textContent = 86000;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;
            case "BOSTAN":
              userAnswer.textContent = 86500;
              countryDisplay.textContent = city;
              displayZipCode.textContent = area;
              break;  
        }
    break;
  }
});
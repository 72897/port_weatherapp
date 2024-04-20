console.log("hllo kunal");

const API_KEY = "1a580cbbe66e3cade619875ef3c93f2f";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

  document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
  try {
    let city = "goa";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather data:->", data);

    renderWeatherInfo(data);
  } catch (err) {
    //handle error
  }
}

async function getCustomWeatherDetails() {
  try {
    let latitute = 15.6333;
    let longitude = 18.333;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    let data = await result.json();
    console.log(data);
  } catch (err) {
    console.log("error found", err);
  }
}

//
function switchTab(clickedTab) {
  apiErrorContainer.classList.remove("active");

  if (clickedTab !== currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");

    if (!searchForm.classList.container("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.contains("active");
      userInfoContainer.classList.remove("active");
      //getFromSessionStorage();
    }

    //console.log("Current Tab", currentTab);
  }
}

function getLocation() {
  if (navigator.getlocation) {
    navigator.getlocation.getCurrentPosition(showPosition);
  } else {
    console.log("nogeolocation support");
  }

  function showPosition(position) {
    let lat = position.coords.latitute;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
  }
}

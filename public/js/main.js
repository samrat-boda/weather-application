const cityName = document.getElementById(`cityName`);
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById(`city_name`);
const k = 273;

const temperature_val = document.getElementById(`temperature_val`);
const temp_status = document.getElementById(`temp_status`);

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = `please enter the city name`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ceebd5f4b3513e2c386653e1cdfc77e7`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temperature_val.innerText = parseInt(arrData[0].main.temp) - k;
      const tempMood = arrData[0].weather[0].main;

      if (tempMood === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i> ";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i> ";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i> ";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i> ";
      }
    } catch (e) {
      city_name.innerHTML = `please check the city name`;
      console.error(e);
    }
  }
};

submitBtn.addEventListener("click", getInfo);

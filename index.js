let searchBtn = document.getElementById("searchBtn");
let weatherContainer = document.getElementById("weatherContainer");

searchBtn.addEventListener("click", async function () {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        weatherContainer.textContent = "Please enter a city name";
        return;
    }

    try {
        let response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        let data = await response.json();

        let temp = data.current_condition[0].temp_C;
        let humidity = data.current_condition[0].humidity;
        let description =
            data.current_condition[0].weatherDesc[0].value;

        weatherContainer.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${temp} °C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Weather: ${description}</p>
        `;
    } catch (error) {
        weatherContainer.textContent =
            "Unable to fetch weather data";
    }
});
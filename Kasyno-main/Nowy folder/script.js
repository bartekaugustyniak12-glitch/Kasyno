const apiKey = "ae52a64082a7d08ea286539f2499d0d30a3f86207ae89a0ef077bbb3778d8da0";

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (!city) {
        result.innerHTML = "❗ Wpisz nazwę miasta";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                result.innerHTML = "❌ Nie znaleziono miasta";
                return;
            }

            result.innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡️ Temperatura: ${data.main.temp}°C</p>
                <p>☁️ Pogoda: ${data.weather[0].description}</p>
                <p>💨 Wiatr: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            result.innerHTML = "⚠️ Błąd pobierania danych";
        });
}

// Weather stack
const key = "14a5ac57d94f1ca14f1b53bb5cb249d9";
const form = document.querySelector("form");
const details = document.querySelector(".details");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  details.innerHTML = "<h1>Loading...</h1>";
  const location = e.target.location.value;
  weatherApp(location);
  form.reset();
});

async function weatherApp(location) {
  const result = await fetchAPI(location);
  generateHTML(result);
}
async function fetchAPI(location) {
  const baseURL = `http://api.weatherstack.com/current?access_key=${key}&query=${location}`;

  const res = await fetch(baseURL);
  const data = await res.json();
  console.log(data);
  return data;
}
function generateHTML(data) {
  const html = `
    <h1 class="temp">${data.current.temperature}</h1>
    <h1 class="status">${data.current.weather_descriptions
      .map((item) => item)
      .join(" ")}</h1>
    <div class="more-info">
        <p>Humidity- ${data.current.humidity}%</p>
        <p>Wind Speed- ${data.current.wind_speed}km/h</p>
        <p>Wind Dir- ${data.current.wind_dir}</p>
        <p>Pressure- ${data.current.pressure}MB</p>
    </div>
    <div class="query">${data.request.query}</div>
    `;

  details.innerHTML = html;
}

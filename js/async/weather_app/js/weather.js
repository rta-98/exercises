// ?? Get your FREE API key at https://openweathermap.org/api
// Sign up (free), go to API keys tab, and paste your key below
const API_KEY = 'YOUR_API_KEY_HERE';

const icons = {
  Clear: '??', Clouds: '??', Rain: '???',
  Drizzle: '???', Thunderstorm: '??', Snow: '??',
  Mist: '???', Fog: '???', Haze: '???'
};

async function getWeather(city) {
  const loading = document.getElementById('loading');
  const errorMsg = document.getElementById('errorMsg');
  const card = document.getElementById('weatherCard');

  loading.classList.remove('hidden');
  errorMsg.classList.add('hidden');
  card.classList.add('hidden');

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();

    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}-C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.wind.speed} m/s`;
    document.getElementById('feels').textContent = `${Math.round(data.main.feels_like)}-C`;
    document.getElementById('weatherIcon').textContent = icons[data.weather[0].main] || '???';
    card.classList.remove('hidden');

  } catch (err) {
    errorMsg.textContent = err.message === 'City not found'
      ? '?? City not found. Check spelling and try again.'
      : '?? Could not load weather. Check your API key.';
    errorMsg.classList.remove('hidden');
  } finally {
    loading.classList.add('hidden');
  }
}

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) getWeather(city);
});

document.getElementById('cityInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const city = e.target.value.trim();
    if (city) getWeather(city);
  }
});

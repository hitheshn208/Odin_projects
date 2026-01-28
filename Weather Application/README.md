# Weather Application 🌤️

A modern, responsive weather application built with vanilla JavaScript, Webpack, and Leaflet maps. Get real-time weather information for any location worldwide with an intuitive glassmorphism UI design.

### [LIVE DEMO](https://weather-application-pi-pied.vercel.app/)

## Features

- **Real-time Weather Data**: Search for any city and get current weather conditions
- **Temperature Toggle**: Switch between Celsius and Fahrenheit with ease
- **Hourly Forecast**: View detailed hourly weather predictions
- **7-Day Forecast**: Plan ahead with a week-long weather outlook
- **Interactive Map**: Visualize weather location with Leaflet.js integration
- **Detailed Metrics**: Access humidity, wind speed, precipitation chance, and UV index
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism design with smooth animations

## Usage

1. **Search for a Location**: Type a city name in the search bar and press Enter or click the search button
2. **View Current Weather**: See real-time weather conditions including temperature, conditions, and more
3. **Toggle Temperature Units**: Use the toggle switch to convert between Celsius and Fahrenheit
4. **Explore Hourly Forecast**: Click on hourly cards to see detailed information for specific times
5. **Check Future Forecast**: Click on daily forecast cards to view predictions for upcoming days
6. **View Location on Map**: See the searched location marked on an interactive map

## Technologies Used

- **JavaScript (ES6+)**: Core application logic
- **Webpack**: Module bundling and build process
- **Leaflet.js**: Interactive map integration
- **CSS3**: Modern styling with glassmorphism effects
- **HTML5**: Semantic markup
- **Weather API**: Real-time weather data

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hitheshn208/Odin_projects.git
cd "Odin_projects/Weather Application"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development server (usually `http://localhost:8080`)

## Development

### Available Scripts

- `npm run dev`: Start the development server with hot reload
- `npm test`: Run tests (currently not implemented)

### Build Configuration

The project uses Webpack with the following loaders:
- **css-loader & style-loader**: For CSS processing
- **html-loader**: For HTML template handling
- **Asset modules**: For image and icon processing

## Acknowledgments

- Weather data provided by Weather API
- Icons and images from various sources
- Built as part of The Odin Project curriculum
- Designed by Hithesh

---

**Note**: Make sure to add your API key for the weather service in the appropriate configuration file before running the application.

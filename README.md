# Weather Forecast App

This is a simple weather forecast application that allows users to search for weather data in any city and view a 5-day forecast. The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data.

## Features

- Current weather information (temperature, humidity, wind speed, and description)
- 5-day weather forecast
- Search for weather by city name
- Get weather based on your current location (using geolocation)

## Technologies Used

- **HTML** for the structure of the app
- **CSS** for styling and layout
- **JavaScript** for dynamic functionality and API calls
- **OpenWeatherMap API** for fetching weather data

## Setup Instructions

### Prerequisites
1. You need an internet connection to fetch live weather data from OpenWeatherMap API.
2. You need a text editor (like [VS Code](https://code.visualstudio.com/)) to modify the code.
3. A modern web browser (like Chrome, Firefox, etc.) to view the app.

### Steps to Run Locally

1. **Clone the repository:**
   Clone the repository to your local machine using:

   ```bash
   git clone https://github.com/yourusername/weather-app.git

Navigate to the project folder: Open the project folder:

bash
Copy code
cd weather-app
Open the app in a browser: Open the index.html file directly in your browser to view the app:

bash
Copy code
open index.html
Alternatively, you can serve the app using a local server if needed (e.g., using VS Code Live Server extension).

API Key
The app uses the OpenWeatherMap API to fetch weather data. You will need to replace the current API key with your own. To get an API key:

Go to OpenWeatherMap.

Sign up and get your API key.

Replace the apiKey variable in the script.js file with your own API key:

js
Copy code
apiKey: "YOUR_API_KEY",
Hosting
You can deploy this app on any of the following platforms:

GitHub Pages
Netlify
Vercel
Firebase Hosting
Heroku
Usage
Search for Weather:

Enter the city name in the search bar and click the search button to view the weather.
Geolocation:

When the app loads, it will attempt to fetch the weather based on your current geolocation (if permission is granted by the browser).
5-Day Forecast:

The app displays a 5-day weather forecast with temperatures, descriptions, and weather icons.
Contributing
Feel free to fork this project and make improvements. If you find any bugs or want to suggest new features, open an issue or submit a pull request.

License
This project is open-source and available under the MIT License.

Acknowledgments
OpenWeatherMap API for providing the weather data.
The Free SVG Weather Icons used in this app.
The design and code are inspired by simple weather web apps.
markdown
Copy code

### Key Sections in the `README.md`:
- **Introduction**: Brief explanation of the app’s purpose.
- **Features**: Lists the main features of the app.
- **Technologies Used**: Describes the stack and tools used.
- **Setup Instructions**: Explains how to get the app running locally.
- **API Key Setup**: Guides users to set up their own API key from OpenWeatherMap.
- **Hosting**: Provides details about where to deploy the app.
- **Usage**: Explains how to interact with the app.
- **Contributing**: Encourages contributions and improvements.
- **License**: States the license for the project.
- **Acknowledgments**: Credits for the used APIs and resources.







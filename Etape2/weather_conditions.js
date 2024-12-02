const { imageOverlay } = require("leaflet");

// sun
[
  {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: 113,
    image: "icons/sunny.svg",
  },

  // Cloud
  {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: 116,
    image: "icons/partly-cloudy-day.svg",
  },

  {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: 119,
    image: "icons/cloudy.svg",
  },
  {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: 122,
    image: "icons/overcast.svg",
  },

  // Mist - La brume
  {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: 143,
    image: "icons/mist.svg",
  },

  // rain
  {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: 176,
    image: "icons/rain.svg",
  },

  // Snow
  {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: 179,
    image: "icons/snow.svg",
  },

  // sleet  - neige fondue
  {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: 182,
    image: "icons/snow.svg",
  },

  // drizzle - bruine
  {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: 185,
    image: "icons/drizzle.svg",
  },

  // thundery - Orague
  {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: 200,
    image: "/icons/thunderstorms.svg",
  },

  // snow
  {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: 227,
    image: "icons/snow.svg",
  },

  // strong snow
  {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: 230,
    image: "icons/snow.svg",
  },

  // fog - brouiilard
  {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: 248,
    image: "icons/mist.svg",
  },

  // brouillard
  {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: 260,
    image: "icons/mist.svg",
  },

  // drizzle
  {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: 263,
    image: "icons/drizzle.svg",
  },
  {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: 266,
    image: "icons/drizzle.svg",
  },
  {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: 281,
    image: "icons/drizzle.svg",
  },
  {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: 284,
    image: "icons/drizzle.svg",
  },

  // rain
  {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: 293,
    image: "icons/rain.svg",
  },
  {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: 296,
    image: "icons/rain.svg",
  },
  {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: 299,
    image: "icons/rain.svg",
  },
  {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: 302,
    image: "icons/rain.svg",
  },
  {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: 305,
    image: "icons/rain.svg",
  },
  {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: 308,
    image: "icons/rain.svg",
  },
  {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: 311,
    image: "icons/rain.svg",
  },
  {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: 314,
    image: "icons/rain.svg",
  },

  // sleet
  {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: 317,
    image: "icons/drizzle.svg",
  },
  {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: 320,
    image: "icons/drizzle.svg",
  },

  // snow
  {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: 323,
    image: "icons/snow.svg",
  },
  {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: 326,
    image: "icons/snow.svg",
  },
  {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: 329,
    image: "icons/snow.svg",
  },
  {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: 332,
    image: "icons/snow.svg",
  },
  {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: 335,
    image: "icons/snow.svg",
  },
  {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: 338,
    image: "icons/snow.svg",
  },

  // Ice pellets
  {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: 350,
    image: "/icons/hail.svg",
  },

  // rain
  {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: 353,
    image: "icons/rain.svg",
  },
  {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: 356,
    image: "icons/rain.svg",
  },
  {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: 359,
    image: "icons/rain.svg",
  },

  // sleet
  {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: 362,
    image: "icons/rain.svg",
  },
  {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: 365,
    image: "icons/rain.svg",
  },

  // snow
  {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: 368,
    image: "icons/snow.svg",
  },
  {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: 371,
    image: "icons/snow.svg",
  },
  {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: 374,
    image: "icons/hail.svg",
  },
  {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: 377,
    image: "icons/hail.svg",
  },

  // rain
  {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: 386,
    image: "icons/thunderstorms.svg",
  },
  {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: 389,
    image: "icons/thunderstorms.svg",
  },

  // snow
  {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: 392,
    image: "icons/thunderstorms.svg",
  },
  {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: 395,
    image: "icons/thunderstorms.svg",
  },
];

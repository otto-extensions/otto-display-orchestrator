export function createWeatherObject() {
    return {
        id: "weather-tile-main",
        type: "WeatherTile",
        zoneId: "RightColumn",
        title: "Weather",
        source: "otto-schedule",
        priority: 60,
        enabled: true,
        variant: "compact",
        content: {
            temperature: 72,
            condition: "Sunny",
            location: "Campus"
        }
    };
}
//# sourceMappingURL=WeatherObject.js.map
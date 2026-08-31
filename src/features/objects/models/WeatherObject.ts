import type { DisplayObject } from "../../layout/models/DisplayObject.js";

export interface WeatherObject extends DisplayObject {
  type: "WeatherTile";
  content: {
    temperature: number;
    conditions: string;
    icon: string;
    location: string;
  };
}

export function createWeatherObject(): WeatherObject {
  return {
    id: "weather-object-main",
    type: "WeatherTile",
    zoneId: "Main",
    title: "Weather Test Page",
    source: "otto-schedule",
    priority: 95,
    enabled: true,
    variant: "current",
    content: {
      temperature: 72,
      conditions: "Partly Cloudy",
      icon: "partly-cloudy",
      location: "Campus"
    }
  };
}

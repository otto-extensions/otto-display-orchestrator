import type { DisplayObject } from "../../layout/models/DisplayObject.js";
export interface WeatherObject extends DisplayObject {
    type: "WeatherTile";
    content: {
        temperature: number;
        condition: string;
        location: string;
    };
}
export declare function createWeatherObject(): WeatherObject;

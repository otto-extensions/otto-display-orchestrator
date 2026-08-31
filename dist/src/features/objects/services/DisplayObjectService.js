import { createAnnouncementObject } from "../models/AnnouncementObject.js";
import { createCalendarObject } from "../models/CalendarObject.js";
import { createHomeworkObject } from "../models/HomeworkObject.js";
import { createWeatherObject } from "../models/WeatherObject.js";
export class DisplayObjectService {
    registry = [
        createAnnouncementObject(),
        createHomeworkObject(),
        createWeatherObject(),
        createCalendarObject()
    ];
    get() {
        return [...this.registry];
    }
    add(object) {
        this.registry.push(object);
        return [...this.registry];
    }
    remove(id) {
        const next = this.registry.filter((object) => object.id !== id);
        this.registry.length = 0;
        this.registry.push(...next);
        return [...this.registry];
    }
}
//# sourceMappingURL=DisplayObjectService.js.map
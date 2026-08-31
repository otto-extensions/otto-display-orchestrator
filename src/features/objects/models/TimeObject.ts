import type { DisplayObject } from "../../layout/models/DisplayObject.js";

export interface TimeObject extends DisplayObject {
  type: "Clock";
  content: {
    currentTime: string;
    format: "HH:MM:SS";
    updatesEverySeconds: number;
  };
}

function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export function createTimeObject(date = new Date()): TimeObject {
  return {
    id: "time-object-main",
    type: "Clock",
    zoneId: "Main",
    title: "Time Test Page",
    source: "otto-display-orchestrator",
    priority: 96,
    enabled: true,
    variant: "current",
    content: {
      currentTime: formatTime(date),
      format: "HH:MM:SS",
      updatesEverySeconds: 1
    }
  };
}

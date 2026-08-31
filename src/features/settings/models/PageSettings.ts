export type TimeDisplayFormat = "12h" | "24h";
export type TimeDisplayStyle = "digital" | "analog";
export type PageKind = "url" | "inline-code" | "time" | "weather" | "custom" | "emergency";
export type TriggerPhase = "chapel" | "assembly" | "emergency" | "lockdown" | "fire-drill";

export interface PageSettings {
  id: string;
  name: string;
  type: PageKind;
  enabled: boolean;
  tier: number;
  displayId: string;
  deleted: boolean;
  deletedAt?: string;
  displayDurationMs: number;
  triggers: {
    timeBased: boolean;
    scheduleBased: boolean;
    weatherBased: boolean;
    phaseBased: boolean;
    scheduleEvent?: string;
    weatherCondition?: string;
    phase?: TriggerPhase;
  };
  timeSettings?: {
    timeZone: string;
    useDaylightSavings: boolean;
    format: TimeDisplayFormat;
    style: TimeDisplayStyle;
    showSeconds: boolean;
    leadingZero: boolean;
  };
  weatherSettings?: {
    units: "F" | "C";
    iconPack: string;
    severeWeatherOverride: boolean;
  };
  customSettings?: {
    inlineCode?: string;
    url?: string;
    assetFolder?: string;
  };
  emergencySettings?: {
    expiryTime?: string;
    severity: "low" | "medium" | "high" | "critical";
    overrideBehavior: "suppress-all" | "tier-only";
  };
}
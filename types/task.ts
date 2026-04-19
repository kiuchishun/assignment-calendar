type BaseTask = {
  id: string;
  title: string;
  memo?: string;
};

export type Weekday =  "月" | "火" | "水" | "木" | "金" | "土" | "日";
export type SingleTask = BaseTask & {
  scheduleType: "single";
  date: string;
};

export type WeeklyTask = BaseTask & {
  weekday: "月" | "火" | "水" | "木" | "金" | "土" | "日";
  scheduleType: "weekly";
};
export type Task = WeeklyTask | SingleTask;

export type NewWeeklyTask = {
  weekday:Weekday
  title: string;
  memo?: string;
};

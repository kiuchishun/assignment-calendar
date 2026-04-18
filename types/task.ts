export type Task ={
  id:string,
  title:string,
  memo?:string,
  weekday?:"月"|"火"|"水"|"木"|"金"|"土"|"日",
  scheduleType:"single"|"weekly"
  date?:string
}
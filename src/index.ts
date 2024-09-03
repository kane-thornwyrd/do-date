export type DDate = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  millisecond: number
  microsecond: number
}

export const convertDateToDDate = (d: Date) : DDate => ({
  year: d.getUTCFullYear(),
  month: d.getUTCMonth(),
  day: d.getUTCDate(),
  hour: d.getUTCHours(),
  minute: d.getUTCMinutes(),
  second: d.getUTCSeconds(),
  millisecond: d.getUTCMilliseconds(),
  microsecond: 0
})
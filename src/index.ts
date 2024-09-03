/**
 * The main Object of do-date
 * A simple and stupid way to store temporal data
 */
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

/**
 * 
 * @param d the `Date` object to convert
 * @returns a DDate object with the same date
 */
export const convertDateToDDate = (d: Date) : DDate => ({
  year: d.getUTCFullYear(),
  month: d.getUTCMonth() + 1,
  day: d.getUTCDate(),
  hour: d.getUTCHours(),
  minute: d.getUTCMinutes(),
  second: d.getUTCSeconds(),
  millisecond: d.getUTCMilliseconds(),
  microsecond: 0
})

/**
 * 
 * @param d the `DDate` object to convert
 * @returns a Date object with the same date
 */
export const convertDDateToDate = (d: DDate) : Date => new Date(Date.UTC(d.year, d.month - 1, d.day, d.hour, d.minute, d.second, d.millisecond))

export enum DDATE_COMPARISON_VALUES {
  BEFORE = -1,
  SAME = 0,
  AFTER = 1,
}

export type DDateComparisonResult =
  | DDATE_COMPARISON_VALUES.BEFORE
  | DDATE_COMPARISON_VALUES.SAME
  | DDATE_COMPARISON_VALUES.AFTER

/**
 * 
 * @remarks
 * 
 * If a `DDate` attribute is in an absolute, but yet undetermined, futur, use `DDATE_ABSOLUTE_FUTUR_VALUE` as value, which is equal to `Infinity`, so when comparing to any other `DDate`, this attribute is always superior to its counterpart.
 */
export const DDATE_ABSOLUTE_FUTUR_VALUE : typeof Infinity = Infinity

/**
 * If `a` is before `b` return `DDATE_COMPARISON_VALUES.BEFORE`
 * 
 * If `a` is the same as `b` return `DDATE_COMPARISON_VALUES.SAME`
 * 
 * If `a` is after `b` return `DDATE_COMPARISON_VALUES.AFTER`
 * @param a first `DDate` to compare
 * @param b second `DDate` to compare
 * @returns a `DDateComparisonResult`
 */
export const compareDDate = (
  a: DDate, b: DDate) : DDateComparisonResult => {
    const sign = Math.sign
    switch (true) {
      case a.year !== b.year: 
        return sign(a.year - b.year) 
      case a.month !== b.month: 
        return sign(a.month - b.month) 
      case a.day !== b.day: 
        return sign(a.day - b.day) 
      case a.hour !== b.hour: 
        return sign(a.hour - b.hour) 
      case a.minute !== b.minute: 
        return sign(a.minute - b.minute) 
      case a.second !== b.second: 
        return sign(a.second - b.second) 
      case a.millisecond !== b.millisecond: 
        return sign(a.millisecond - b.millisecond) 
      default:
        return sign(a.microsecond - b.microsecond)
    }
}
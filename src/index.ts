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

export const defaultDDate: DDate = {
  year: (new Date()).getUTCFullYear(),
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
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
 * If a `DDate` attribute is in an absolute, but yet undetermined, futur,
 * use `DDATE_ABSOLUTE_FUTUR_VALUE` as value, which is equal to `Infinity`,
 * so when comparing to any other `DDate`, this attribute is always superior to
 * its counterpart.
 * 
 * @example
 * for a `DDate` that is at the very final day of January:
 * ```
 * const lastDayOfJanuary =
 *   {
 *     year: 2024,
 *     month: 1,
 *     day: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     hour: 0,
 *     minute: 0,
 *     second: 0,
 *     millisecond: 0,
 *     microsecond: 0,
 *   }
 * ```
 * but you can also have a `DDate` that will **always** be the 
 * very final moment of January:
 * ```
 * const lastMomentOfJanuary =
 *   {
 *     year: 2024,
 *     month: 1,
 *     day: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     hour: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     minute: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     second: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     millisecond: DDATE_ABSOLUTE_FUTUR_VALUE,
 *     microsecond: DDATE_ABSOLUTE_FUTUR_VALUE,
 *   }
 * ```
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

/**
 * @example
 * a DDateString looks like:
 * `2024-01-30|9:30:45:135:756`
 */
export const DDATESTRING_REGEX = /^(?<year>[0-9]{4})(-(?<month>[0-9]{1,2})(-(?<day>[0-9]{1,2})(\|(?<hour>[0-9]{1,2})(:(?<minute>[0-9]{1,2})(:(?<second>[0-9]{1,2})(:(?<millisecond>[0-9]{3})(:(?<microsecond>[0-9]{3}))?)?)?)?)?)?)?$/i

/**
 * convert a DDateString to a DDate object
 * @param DDateString that should looks like `2024-01-30|9:30:45:135:756`
 * @returns 
 */
export const convertDDateStringToDDate = (
  dateString: string,
): DDate | never => {
  if (!DDATESTRING_REGEX.exec(dateString))
    throw new Error(`unable to parse "${dateString}" to DDate`)

  return {
    ...defaultDDate, 
    ...Object.fromEntries(
Object.entries(DDATESTRING_REGEX.exec(dateString).groups)
        .map(
            ([k,v]) => 
              [k, parseInt(v as string, 10)]
        )
      )
    } as DDate
}
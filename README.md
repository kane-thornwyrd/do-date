## :toolbox: Functions

- [convertDateToDDate](#gear-convertdatetoddate)
- [convertDDateToDate](#gear-convertddatetodate)
- [compareDDate](#gear-compareddate)
- [convertDDateStringToDDate](#gear-convertddatestringtoddate)

### :gear: convertDateToDDate

| Function | Type |
| ---------- | ---------- |
| `convertDateToDDate` | `(d: Date) => DDate` |

Parameters:

* `d`: the `Date` object to convert


### :gear: convertDDateToDate

| Function | Type |
| ---------- | ---------- |
| `convertDDateToDate` | `(d: DDate) => Date` |

Parameters:

* `d`: the `DDate` object to convert


### :gear: compareDDate

If `a` is before `b` return `DDATE_COMPARISON_VALUES.BEFORE`

If `a` is the same as `b` return `DDATE_COMPARISON_VALUES.SAME`

If `a` is after `b` return `DDATE_COMPARISON_VALUES.AFTER`

| Function | Type |
| ---------- | ---------- |
| `compareDDate` | `(a: DDate, b: DDate) => DDateComparisonResult` |

Parameters:

* `a`: first `DDate` to compare
* `b`: second `DDate` to compare


### :gear: convertDDateStringToDDate

convert a DDateString to a DDate object

| Function | Type |
| ---------- | ---------- |
| `convertDDateStringToDDate` | `(dateString: string) => DDate` |

Parameters:

* `DDateString`: that should looks like `2024-01-30|9:30:45:135:756`



## :wrench: Constants

- [defaultDDate](#gear-defaultddate)
- [DDATE_ABSOLUTE_FUTUR_VALUE](#gear-ddate_absolute_futur_value)
- [DDATESTRING_REGEX](#gear-ddatestring_regex)

### :gear: defaultDDate

| Constant | Type |
| ---------- | ---------- |
| `defaultDDate` | `DDate` |

### :gear: DDATE_ABSOLUTE_FUTUR_VALUE

| Constant | Type |
| ---------- | ---------- |
| `DDATE_ABSOLUTE_FUTUR_VALUE` | `number` |

Examples:

for a `DDate` that is at the very final day of January:
```
const lastDayOfJanuary =
  {
    year: 2024,
    month: 1,
    day: DDATE_ABSOLUTE_FUTUR_VALUE,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
  }
```
but you can also have a `DDate` that will **always** be the 
very final moment of January:
```
const lastMomentOfJanuary =
  {
    year: 2024,
    month: 1,
    day: DDATE_ABSOLUTE_FUTUR_VALUE,
    hour: DDATE_ABSOLUTE_FUTUR_VALUE,
    minute: DDATE_ABSOLUTE_FUTUR_VALUE,
    second: DDATE_ABSOLUTE_FUTUR_VALUE,
    millisecond: DDATE_ABSOLUTE_FUTUR_VALUE,
    microsecond: DDATE_ABSOLUTE_FUTUR_VALUE,
  }
```


### :gear: DDATESTRING_REGEX

| Constant | Type |
| ---------- | ---------- |
| `DDATESTRING_REGEX` | `RegExp` |

Examples:

a DDateString looks like:
`2024-01-30|9:30:45:135:756`




## :nut_and_bolt: Enum

- [DDATE_COMPARISON_VALUES](#gear-ddate_comparison_values)

### :gear: DDATE_COMPARISON_VALUES



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `BEFORE` | `-1` |  |
| `SAME` | `0` |  |
| `AFTER` | `1` |  |


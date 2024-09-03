## :toolbox: Functions

- [convertDateToDDate](#gear-convertdatetoddate)
- [convertDDateToDate](#gear-convertddatetodate)
- [compareDDate](#gear-compareddate)

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



## :wrench: Constants

- [DDATE_ABSOLUTE_FUTUR_VALUE](#gear-ddate_absolute_futur_value)

### :gear: DDATE_ABSOLUTE_FUTUR_VALUE

| Constant | Type |
| ---------- | ---------- |
| `DDATE_ABSOLUTE_FUTUR_VALUE` | `number` |



## :nut_and_bolt: Enum

- [DDATE_COMPARISON_VALUES](#gear-ddate_comparison_values)

### :gear: DDATE_COMPARISON_VALUES



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `BEFORE` | `-1` |  |
| `SAME` | `0` |  |
| `AFTER` | `1` |  |


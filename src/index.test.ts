import 'chai/register-expect'
import chaiAsPromised from 'chai-as-promised'
import * as chai from 'chai'
import { faker } from '@faker-js/faker';

import { convertDateToDDate, convertDDateToDate, DDate, compareDDate, DDATE_COMPARISON_VALUES } from '.'

chai.use(chaiAsPromised)

const expect = chai.expect

const aRandomDate = () => faker.date.recent()

const aRandomDDateObject = (override? : Partial<DDate>): DDate => {
  const src = faker.date.recent()
  return {
    year: src.getUTCFullYear(),
    month: src.getUTCMonth(),
    day: src.getUTCDate(),
    hour: src.getUTCHours(),
    minute: src.getUTCMinutes(),
    second: src.getUTCSeconds(),
    millisecond: src.getUTCMilliseconds(),
    microsecond: faker.number.int(),
    ...override
  }
}

describe('the DDate data structure', () => {
  ;[
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'microsecond',
  ].map((attr) => {
    it(`should contain a ${attr}`, () => {
      expect(aRandomDDateObject()).to.haveOwnProperty(attr)
    })
  })
})

describe('ways to convert vanilla JS Date to DDate objects and vice-versa', () => {

  it('has a function to convert a Date to a DDate', () => {
    const target = aRandomDate()
    const converted = convertDateToDDate(target)
    ;[
      ['getUTCFullYear', 'year' ],
      ['getUTCMonth', 'month' ],
      ['getUTCDate', 'day' ],
      ['getUTCHours', 'hour' ],
      ['getUTCMinutes', 'minute' ],
      ['getUTCSeconds', 'second' ],
      ['getUTCMilliseconds', 'millisecond' ],
    ].map(([method, attr]) => {
      expect(converted[attr], `"${attr}" is not correct`).to.equal(target[method]() + (attr === 'month'))
    })
  })

  it('has a function to convert a DDate to a Date', () => {
    const target = aRandomDDateObject()
    const converted = convertDDateToDate(target)
    ;[
      ['getUTCFullYear', 'year' ],
      ['getUTCMonth', 'month' ],
      ['getUTCDate', 'day' ],
      ['getUTCHours', 'hour' ],
      ['getUTCMinutes', 'minute' ],
      ['getUTCSeconds', 'second' ],
      ['getUTCMilliseconds', 'millisecond' ],
    ].map(([method, attr]) => {
      expect(converted[method]() + (attr === 'month'), `"${attr}" is not correct (${JSON.stringify(target)} → ${JSON.stringify(converted)})`).to.equal(target[attr])
    })
  })
})

describe('ways to compare DDates', () => {
  it('should provide a function that compare two DDate object', () => {
    const pastDDate = aRandomDDateObject({year: 0})
    const futurDDate = aRandomDDateObject({year: 1})
    expect(compareDDate(pastDDate, futurDDate)).to.equal(DDATE_COMPARISON_VALUES.BEFORE)
    expect(compareDDate(pastDDate, pastDDate)).to.equal(DDATE_COMPARISON_VALUES.SAME)
    expect(compareDDate(futurDDate, pastDDate)).to.equal(DDATE_COMPARISON_VALUES.AFTER)
  })
})

import 'chai/register-expect'
import chaiAsPromised from 'chai-as-promised'
import * as chai from 'chai'
import { faker } from '@faker-js/faker';

import { convertDateToDDate, DDate } from '.'

chai.use(chaiAsPromised)

const expect = chai.expect

const aRandomDate = () => faker.date.recent()

const aDDateObject = (): DDate => ({
  year:0,
  month:0,
  day:0,
  hour:0,
  minute:0,
  second:0,
  millisecond:0,
  microsecond:0,
})

describe('DDate data structure', () => {
  it('should contain a year', () => {
    expect(aDDateObject()).to.haveOwnProperty('year')
  })
  it('should contain a month', () => {
    expect(aDDateObject()).to.haveOwnProperty('month')
  })
  it('should contain a day', () => {
    expect(aDDateObject()).to.haveOwnProperty('day')
  })
  it('should contain a hour', () => {
    expect(aDDateObject()).to.haveOwnProperty('hour')
  })
  it('should contain a minute', () => {
    expect(aDDateObject()).to.haveOwnProperty('minute')
  })
  it('should contain a second', () => {
    expect(aDDateObject()).to.haveOwnProperty('second')
  })
  it('should contain a millisecond', () => {
    expect(aDDateObject()).to.haveOwnProperty('millisecond')
  })
  it('should contain a microsecond', () => {
    expect(aDDateObject()).to.haveOwnProperty('microsecond')
  })
})

describe('A way to convert vanilla JS Date to DDate objects', () => {
  it('should convert a Date to a DDate while conserving the correct data', () => {
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
      expect(converted[attr], `"${attr}" is not correct`).to.equal(target[method]())
    })
  })
})
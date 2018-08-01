const expect = require('expect')
const {isRealString} = require('./validation')

describe('isRealString', () => {
	it('should reject string with only spaces', () => {
		const word = '     '
		const res = isRealString(word)

		expect(res).toBe(false)
	})

	it('should reject non-string values', () => {
		const word = 98
		const res = isRealString(word)

		expect(res).toBe(false)
	})

	it('should allow strings with non-space chars', () => {
		const word = '   Kary    '
		const res = isRealString(word)

		expect(res).toBe(true)
	})
})
const expect = require('expect')
const {generateMessage} = require('./message')

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		const form = 'Kary'
		const text = 'Hi there'
		const res = generateMessage(form, text)

		// expect(res.createdAt).toBeA('number')
		// expect(res).toBeA('number')
		expect(res).toMatchObject({form, text})
	})
})

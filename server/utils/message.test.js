const expect = require('expect')
const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		const from = 'Kary'
		const text = 'Hi there'
		const res = generateMessage(from, text)

		// expect(res.createdAt).toBeA('number')
		// expect(res).toBeA('number')
		expect(res).toMatchObject({from, text})
	})
})

describe('generateLocationMessage', () => {
	it('Location is correct', () => {
		const from = 'Admin'
		const latitude = 22.1449167
		const longitude = -101.0374247
		const url = `https://www.google.com/maps?q=${latitude},${longitude}`
		const res = generateLocationMessage(from, latitude, longitude)
		// expect(res.createdAt).toBeA('number')
		// expect(res).toBeA('number')
		expect(res).toMatchObject({from, url})
	})
})

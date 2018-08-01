const expect = require('expect')
const {Users} = require('./users')

describe('Users', () => {
	var users

	beforeEach(() => {
		users = new Users()	
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},{
			id: '2',
			name: 'Jen',
			room: 'React Course'
		},{
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}]
	})

	it('should add new users', () => {
		var users = new Users()
		var user = {
			id: '123',
			name: 'Kary',
			room: 'Room 1'
		}
		var resUser = users.addUser(user.id, user.name, user.room)

		expect(users.users).toEqual([user])
	})

	it('should return names for the react course', () => {
		var userList = users.getUserList('React Course')
		expect(userList).toEqual(['Jen'])
	})


	it('should return names for the node course', () => {
		var userList = users.getUserList('Node Course')
		expect(userList).toEqual(['Mike', 'Julie'])
	})

})

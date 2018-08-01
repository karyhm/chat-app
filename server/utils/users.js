// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.users = []
	}

	// methods
	addUser (id, name, room) {
		const user = {
			id,
			name,
			room
		}

		removeUser (id) {

		}

		getUser (id) {
		}

		getUserList (room) {
			var users = this.users.filter((user) => user.room === room )
			var namesArray = users.map((user) => user.name )

			return namesArray
		}

	}
}

// class Person {
// 	// coonstructor function. Initialize instance of class
// 	constructor (name, age) {
// 		// this refers to the iinstance
// 		this.name = name
// 		this.age = age
// 		console.log(name, age)
// 	}
// 	// methods
// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old`
// 	}
// }

// // instance of the class person
// var me = new Person('Andrew', 25)
// // console.log('this.name', me.name)
// // console.log('this.age', me.age)
// const description = me.getUserDescription()
// console.log(description)

module.exports = {Users}
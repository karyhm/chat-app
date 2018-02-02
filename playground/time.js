// https://momentjs.com/docs/#/displaying/
const moment = require('moment')

// timestamp value
var someTimestamp = moment().valueOf()
console.log(someTimestamp)

const createdAt = 1234
const date = moment(createdAt)
console.log(date.format('h:mm a'))

// const date = moment()
// console.log(date.format('h:mm a'))

// new Date().getTime()
// var date = new Date()
// var months = ['Jan', 'Feb']
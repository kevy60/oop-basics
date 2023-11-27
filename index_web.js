const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const Person = require('./classes/Person')
const Student = require('./classes/Student')



const student1 = new Student('Alice')
student1.setDateOfBirth(1996)
student1.setId(1)
console.log(student1)
console.log(student1.description())

app.get('/persons', (req, res) => {
	const person1 = new Person('Adam')
	person1.setDateOfBirth(1995) 
	console.log(person1)
	console.log(person1.description())
	console.log()
	res.json({'person': person1})
})

app.listen(3008, () => {
  console.log('Example app is started at http://localhost:3008')
})
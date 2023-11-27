const express=require('express')

const school = require('../data/example')

const getStudent = (req, res) => {
	school.students.forEach((student) => {
		console.log(student)
		if(student.name === req.params.name){
			student.age = student.age()
			res.json({
				student: student
			})
		}
	})
	
}

const getStudentGrades = (req, res) => {
	school.students.forEach((student) => {
		if(student.name === req.params.name){
			res.json({
				grades: student.getGrades()
			})
		}
	})
}


module.exports = {
	getStudent,
	getStudentGrades
}
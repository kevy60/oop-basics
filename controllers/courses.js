const express=require('express')

const school = require('../data/example')

const getCourseName = (req, res) => {
	school.courses.forEach((course) => {
		if(course.getName() === req.params.name){
			res.json({name: course.name})
		}
	})
	
}

const getCourseGrades = (req, res) => {
	school.courses.forEach((course) => {
		if(course.getName() === req.params.name){
			res.json({grades: course.getGrades()})
		}
	})
}


module.exports = {
	getCourseName,
	getCourseGrades
}
const express = require('express')

const router = express.Router()

const studentController = require('../controllers/students')

router.get('/:name', (req, res) => studentController.getStudentName(req, res))


router.get('/:name/grades', (req, res) => studentController.getStudentGrades(req, res))

module.exports = router;
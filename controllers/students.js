const student = require('../data/example')
const school = require('../data/example')

const getStudentName = (req, res) => {
    const studentName = req.params.name;
    const student = school.getStudents().find(s => s.getName() === studentName);
    if (student) {
        res.json({name: student.getName()});
    }
}

const getStudentGrades = (req, res) => {
    const studentName = req.params.name;
    const student = school.getStudents().find(s => s.getName() === studentName);
    if (student) {
        res.json({grades: student.getGrades()});
    }
}

module.exports = {
    getStudentName,
    getStudentGrades
}

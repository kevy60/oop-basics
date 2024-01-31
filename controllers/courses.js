const course = require('../data/example')
const school = require('../data/example')

const getCourseByName = (name) => {
    return school.getCourses().find(course => course.getName() === name);
};

const getCourseName = (req, res) => {
    const courseName = req.params.name;
    const course = getCourseByName(courseName);
    if (course) {
        res.json({ name: course.getName() });
    }
}

const getCourseGrades = (req, res) => {
    const courseName = req.params.name;
    const course = school.getCourses().find(c => c.name === courseName);
    if (course) {
        res.json({grades: course.getGrades()});
    }
}

module.exports = {
    getCourseName,
    getCourseGrades
}

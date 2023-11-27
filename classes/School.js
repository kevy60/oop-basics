 class School{
  constructor(name){
    this.name = name
    this.students = []
    this.courses = []
  }
  getName(){
    return this.name
  }
  addCourse(course){
    if(this.courses.indexOf(course) === -1){
      this.courses.push(course)
    }
  }
  addStudent(student){
    if(student.age() >= 15){
      if(this.students.indexOf(student) === -1){
        let id = Math.random().toString()
        student.setId(id)
        this.students.push(student)
      }
    }
  }
  addStudentGrade(student, course, grade){
    if(this.students.indexOf(student) !== -1 && this.courses.indexOf(course) !== -1){
      student.addGrade(course, grade)
      course.addGrade(student, grade)
    }
  }
  getGrades(){
    return this.grades
  }
  getStudents(){
    return this.students
  }
  getCourses(){
    return this.courses
  }
  getStudentsOrderedByAverageGrade(){
    let sortedStudents = this.students.sort(
    (s1, s2) => (s1.getAverageGrade() < s2.getAverageGrade()) ? 1 : (s1.getAverageGrade() > s2.getAverageGrade()) ? -1 : 0);
    return sortedStudents
  }
  description(){
    return `School name ${this.getName()}.`
  }

}

module.exports = School
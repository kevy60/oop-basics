const Person = require('./Person')

class Student extends Person{
  constructor(name){
    super(name)
    this.grades = []
    this.id = null
  }
  setId(id){
    if(this.id === null){
      this.id = id
    }
  }
  getId(){
    return this.id
  }
  getGrades(){
    return this.grades
  }
  addGrade(course, grade){
    this.grades.push({
      course: course.getName(),
      grade: grade
    })
  }
  getAverageGrade(){
    if(this.grades.length === 0){
      return -1
    } else if(this.grades.length === 1) {
      return this.grades[0].grade
    } else {
      return this.grades.reduce((a, b) => a.grade + b.grade)/this.grades.length
    }
  }
  description(){
    return `Created student with name ${this.getName()}, ${this.age()} years old, with id=${this.id} and grades are ${this.getGrades()} with average grade ${this.getAverageGrade()}.`
  }

}

module.exports = Student
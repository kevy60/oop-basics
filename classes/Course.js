 class Course{
  constructor(name){
    this.name = name
    this.grades = []
  }
  getName(){
    return this.name
  }
  getGrades(){
    return this.grades
  }
  addGrade(student, grade){
    this.grades.push({
      student: student.getName(),
      grade: grade
    })
  }
  getAverageGrade(){
    if(this.grades.length === 0){
      return -1
    } else {
      let sum = 0
      this.grades.forEach((grade) => {
        sum += grade.grade
      })
      return sum / this.grades.length
    }
  }
  description(){
    return `Course name ${this.getName()}.`
  }

}

module.exports = Course
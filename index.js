class Person {
  constructor(name) {
    this.name = name;
    this.dateOfBirth = null;
  }

  setDateOfBirth(year) {
    this.dateOfBirth = year;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  age() {
    const currentYear = new Date().getFullYear();
    return this.dateOfBirth ? currentYear - this.dateOfBirth : null;
  }

  getName() {
    return this.name;
  }

  description() {
    return `Person: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.grades = [];
    this.id = null;
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  getGrades() {
    return this.grades;
  }

  addGrade(course, grade) {
    this.grades.push({ course, grade });
  }

  getAverageGrade() {
    if (this.grades.length === 0) return -1;
    const total = this.grades.reduce((sum, { grade }) => sum + grade, 0);
    return total / this.grades.length;
  }

  description() {
    return `Student: ${this.name}`;
  }
}

class Course {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade(student, grade) {
    this.grades.push({ student, grade });
    student.addGrade(this, grade);
  }

  getGrades() {
    return this.grades;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return -1;
    const total = this.grades.reduce((sum, { grade }) => sum + grade, 0);
    return total / this.grades.length;
  }

  description() {
    return `Course: ${this.name}`;
  }
}

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.courses = [];
  }

  addStudent(student) {
    const existingStudent = this.students.find((s) => s.getId() === student.getId());
    if (!existingStudent && student.age() >= 6) {
      student.setId(this.students.length + 1);
      this.students.push(student);
    }
  }

  addCourse(course) {
    const existingCourse = this.courses.find((c) => c.name === course.name);
    if (!existingCourse) {
      this.courses.push(course);
    }
  }

  addStudentGrade(student, course, grade) {
    const studentInSchool = this.students.find((s) => s.getId() === student.getId());
    const courseInSchool = this.courses.find((c) => c.name === course.name);

    if (studentInSchool && courseInSchool) {
      courseInSchool.addGrade(student, grade);
    }
  }

  getStudents() {
    return this.students;
  }

  getCourses() {
    return this.courses;
  }

  getStudentsOrderedByAverageGrade() {
    return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  }
}



//test

// Create instances
const school = new School("Awesome School");
const student1 = new Student("Kevin");
student1.setDateOfBirth(1995);
const student2 = new Student("Liis");
student2.setDateOfBirth(2000);

// Try adding the same student again (should not be added)
school.addStudent(student1);
school.addStudent(student1);

// Add students to the school
school.addStudent(student1);
school.addStudent(student2);

console.log(school.getStudents().length); // 2

// Create courses
const course1 = new Course("Math");
const course2 = new Course("Physics");

// Try adding the same course again (should not be added)
school.addCourse(course1);
school.addCourse(course1);

// Add courses to the school
school.addCourse(course1);
school.addCourse(course2);

console.log(school.getCourses().length); // 2

// Add grades for students
school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);
school.addStudentGrade(student2, course1, 5);

console.log(student1);
console.log(student2);

// Create a new student
const student3 = new Student("Sten");
student3.setDateOfBirth(2000);

// Try adding grades to a student who is not in the school (should not be added)
school.addStudentGrade(student3, course1, 5);

console.log(student3.getGrades().length); // 0

// Add the new student to the school and add grades
school.addStudent(student3);
school.addStudentGrade(student3, course1, 3);
school.addStudentGrade(student3, course2, 5);

console.log(student3.getGrades().length); // 2

console.log(student3.getGrades());
console.log(course1.getGrades());

console.log("Students ordered by average grade:");
console.log("Student - avg grade");
console.log("-".repeat(30));
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.getName(), student.getAverageGrade());
});
console.log("-".repeat(30));

console.log();
console.log("Course average grades");
school.getCourses().forEach((course) => {
    console.log(course.description(), course.getAverageGrade());
});



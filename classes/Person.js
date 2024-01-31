class Person{
  // construct
  constructor(name){
    this.name = name
  }
  setDateOfBirth(year){
    this.year = year
  }
  getDateOfBirth(){
    return this.year
  }
  age(){
    return new Date().getFullYear() - this.year
  }
  getName(){
    return this.name
  }
  description(){
    return `Created person with name ${this.getName()}, ${this.age()} years old.`
  }
}

module.exports = Person
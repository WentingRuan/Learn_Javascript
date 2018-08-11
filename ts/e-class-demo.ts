class Person1 {

    public name: string

    constructor(
        _name: string,
        public age: number,
        public occupation: string
    ) {
        this.name = _name + " Lee"
    }

    getAge() {
        return this.age
    }

}



class Student1 extends Person1 { //Student 是 Person的子类

    private nickname: string
    public skill: string

    constructor(
        _name: string,
        _age: number,
        _nickname: string,
        _skill: string
    ) {
        super(_name, _age, "student"), //super,指向父类；super.method() 这样就可以达到调用父类同名的方法
            this.nickname = _nickname
        this.skill = _skill
    }

    getAge() {
        console.log("student.getAge()")
        return this.age
    }

    getScore() {
        console.log("student.getScore()")
        return 100
    }

    getNickname() {
        console.log("student.getNickname()")
        return this.nickname
    }

    getSkill() {
        console.log("student.getSkill()")
        return this.skill
    }

}

let p1 = new Person1("John", 33, "Worker")
let s1 = new Student1("Tom", 11, "tt", "painting")


console.log(p1.name)
console.log(p1.age)
console.log("p.getAge(): " + p1.getAge())
console.log(p1.occupation)
console.log(typeof (p1))

console.log("---")
console.log(s1.name)
console.log(s1.age)
console.log(s1.getNickname())
console.log(s1.skill)
console.log("---")
console.log("p = s")

p = s //子类可以赋给父类

console.log(p1.name)
console.log(p1.age)
console.log("p.getAge(): " + p1.getAge())
console.log(p1.occupation)
console.log(typeof (p1))


// s = p // 当子类中有private属性时，父类不可赋给子类


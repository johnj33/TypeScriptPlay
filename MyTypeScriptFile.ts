/**
 * Created by jacksonj on 08/01/2016.
 */
function greeter(person: Person) {
    return "Hello, " + person.firstname + person.lastname + "<br/>" + "age: " + person.age;
}

function studentGreeter(student : Student):string {
    return "Hello student, " + student.fullname + ":age=" + student.age + ":enrolled=" + student.enrolmentStatus + ":student number=" + student.studentNo +
        "<br/>" + "number: " + student.doStuff(6,3);
}

interface Person {
    firstname: string;
    lastname:string;
    age:number;
    doStuff(number1:number,number2:number):number;
}

enum EnrolmentStatus {
    YES,
    NO,
    AWAITING_OFFER
}

class Student implements Person{
    doStuff(number1:number, number2:number):number {
        return number1 + number2;
    }
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname, public age , public enrolmentStatus:EnrolmentStatus = EnrolmentStatus.NO, public studentNo:string="unassigned")
    {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}


var user = new Student("Gary", "R", "Lloyd",12);

document.body.innerHTML = studentGreeter(user);
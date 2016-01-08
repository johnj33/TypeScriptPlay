/**
 * Created by jacksonj on 08/01/2016.
 */
function greeter(person) {
    return "Hello, " + person.firstname + person.lastname + "<br/>" + "age: " + person.age;
}
function studentGreeter(student) {
    return "Hello student, " + student.fullname + ":age=" + student.age + ":enrolled=" + student.enrolmentStatus + ":student number=" + student.studentNo +
        "<br/>" + "number: " + student.doStuff(6, 3);
}
var EnrolmentStatus;
(function (EnrolmentStatus) {
    EnrolmentStatus[EnrolmentStatus["YES"] = 0] = "YES";
    EnrolmentStatus[EnrolmentStatus["NO"] = 1] = "NO";
    EnrolmentStatus[EnrolmentStatus["AWAITING_OFFER"] = 2] = "AWAITING_OFFER";
})(EnrolmentStatus || (EnrolmentStatus = {}));
var Student = (function () {
    function Student(firstname, middleinitial, lastname, age, enrolmentStatus, studentNo) {
        if (enrolmentStatus === void 0) { enrolmentStatus = EnrolmentStatus.NO; }
        if (studentNo === void 0) { studentNo = "unassigned"; }
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.age = age;
        this.enrolmentStatus = enrolmentStatus;
        this.studentNo = studentNo;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    Student.prototype.doStuff1 = function (number1, number2) {
        return number1 + number2;
    };
    return Student;
})();
var user = new Student("Gary", "R", "Lloyd", 12);
document.body.innerHTML = studentGreeter(user);

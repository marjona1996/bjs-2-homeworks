function Student(name, gender, age) {
	this.name = name,
		this.gender = gender,
		this.age = age,
		marks = [],
}
let user = new Student("Anna", "famel", 36);


Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
	if (Student.marks) {
		console.log(Student.marks);
	} if (subject === this.excluded) {
		delete this.marks;
		delete this.subject;
	}
	this.subject = marksToAdd;

}
Student.prototype.getAverage = function () {

}

Student.prototype.exclude = function (reason) {

}

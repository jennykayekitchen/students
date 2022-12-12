//createStudent() should return a new student object. 
//The name of the student, and which grade the student is in, must be passed to the function as arguments.
//The returned object should have a name property and a grade property.
const createStudent = (name, studentGrade) => {
    const studentInfo = {
        studentName: name,
        gradeLevel: studentGrade
    }
    return studentInfo
};

//addMathGrade() should add a new "math" property to the student with a value of "B".
const addMathGrade = (studentInfo) => {
    studentInfo.math = "B"
    return studentInfo
};

//addHistoryGrade() should add a new "history" property to the student with a value of "C".
const addHistoryGrade = (studentInfo) => {
    studentInfo.history = "C"
    return studentInfo
};

//addScienceGrade() should add a new "science" property to the student with a value of "A".
const addScienceGrade = (studentInfo) => {
    studentInfo.science = "A"
    return studentInfo
};

//Each function should define a parameter to hold the object.
//Each function should be invoked with an object provided as an argument.
//Each function should return the object after the property is added.
//The return value of the function should be stored in a variable.

const studentProfile = createStudent("Jenny Kitchen", 12);
const jennyReportCardMath = addMathGrade(studentProfile);
const jennyReportCardHistory = addHistoryGrade(jennyReportCardMath);
const jennyFinalReportCard = addScienceGrade(jennyReportCardHistory);

console.log(jennyFinalReportCard);


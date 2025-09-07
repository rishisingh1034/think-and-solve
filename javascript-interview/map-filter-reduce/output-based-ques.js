// Return name of students with Capital letters.

let students = [
    { name: "Rishi", age: 21, roll: 49 },
    { name: "Raja", age: 15, roll: 22 },
    { name: "kumar", age: 14, roll: 23 },
    { name: "kailu", age: 7, roll: 16 },
]

let capitalNames = students.map((name) => name.name.toUpperCase());
console.log(capitalNames)

// return only names with starting with capital letters

let capNames = students.filter((student) => {
    let cap = student.name.charAt(0);
    return cap === cap.toUpperCase();
}).map((student) => student.name)

console.log(capNames)

const marks = students.filter((student) => student.roll > 24)
console.log(marks)

const totalMarks = students.reduce((acc, student) => acc + student.age, 0);
console.log(totalMarks)

const newMarks = students.map((student) => {
    if (student.roll < 25) {
        student.roll += 5
    }
    return student
}).filter((student) => student.roll > 25).reduce((acc, stu) => acc + stu.roll, 0)

console.log(newMarks)
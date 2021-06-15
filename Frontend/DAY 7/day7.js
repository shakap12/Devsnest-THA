//Ques 1
console.log('\n a JavaScript program to list the properties of a JavaScript object.');
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
for (let item in student) {
    console.log(item);
}

//Ques 2
console.log('\n a JavaScript program to delete the rollno property from the object.');

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);

//Ques 3
console.log('\n a JavaScript program to get the length of a JavaScript object.');

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("length of the object is", Object.keys(student).length);

//Ques 4
console.log('\n a JavaScript program to display the reading status');

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}, {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
}, {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];

console.log(JSON.stringify(library, null, 4));

//Ques 5
console.log('a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.');

var volume = {
    pi: 3.1416,
    height: 4,
    radius: 5,
};
console.log((volume.pi * Math.pow(volume.radius, 2) * volume.height).toFixed(4));

//Ques 6
console.log('\na JavaScript program to sort an array of JavaScript objects.');

var library = [{
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
}, {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
}, {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

library.sort(function (a, b) {
    return b.libraryID - a.libraryID;
});
console.log(JSON.stringify(library, null, 0));
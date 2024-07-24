//1
let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Maharashtra", "Tamil Nadu"];
let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates); // ["Bihar", "Kerala", "Maharashtra", "Tamil Nadu"]
//2
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr); // "India my love I"
//3
let string = 'INDIA';
let arr = string.split('');
arr.splice(2, 3, 'D', 'O', 'N', 'E', 'S', 'I', 'A');
let newString = arr.join('');
console.log(newString); // "INDONESIA"
//4
let sampleString = 'This is a sample string with more than twenty characters';
let vowelsCount = (sampleString.match(/[aeiouAEIOU]/g) || []).length;
let consonantsCount = (sampleString.match(/[^aeiouAEIOU\s\d]/g) || []).length;

console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`); // Vowels: 11, Consonants: 25
//5
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

console.log(correctfn('This is the wrong word', 'wrong', 'right')); // "This is the right word"
//6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(num => num > 5);
console.log(result); // [9, 10, 7]
//7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    let average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);
//8
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}

console.log(repeatedSumOfDigits(456)); // 6
//9
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(Boolean).length;
}

let paragraph = "This is a sample paragraph to count the number of words.";
console.log(countWords(paragraph)); // 10
//10
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // "olleH"
//11
const studentsData = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const averages = studentsData.map(student => {
    const key = Object.keys(student)[0];
    const subjects = Object.values(student[key]);
    const average = subjects.reduce((a, b) => a + b, 0) / subjects.length;
    return { [key]: { average: average } };
});

console.log(averages);


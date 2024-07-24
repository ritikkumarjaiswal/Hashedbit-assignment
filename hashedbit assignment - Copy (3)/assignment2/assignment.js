for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//2
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'subtract')); // 5
console.log(calculate(10, 5, 'multiply')); // 50
console.log(calculate(10, 5, 'divide'));   // 2
//3
function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return 'Invalid salary';
    }
    return salary * taxRate;
}

console.log(findTax(400000));   // 0
console.log(findTax(600000));   // 60000
console.log(findTax(1200000));  // 240000
console.log(findTax(2000000));  // 600000
//4
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse().join('');
    let str2 = n2.toString().split('').reverse().join('');
    let minLength = Math.min(str1.length, str2.length);
    let sum = 0;
    
    for (let i = 0; i < minLength; i++) {
        sum += (parseInt(str1[i]) || 0) * (parseInt(str2[i]) || 0);
    }
    
    return sum;
}

console.log(sumOfProducts(6, 34));  // 24
console.log(sumOfProducts(123, 456)); // (3*6) + (2*5) + (1*4) = 3*6 + 2*5 + 1*4 = 18 + 10 + 4 = 32
console.log(sumOfProducts(12, 34));  // (2*4) + (1*3) = 8 + 3 = 11

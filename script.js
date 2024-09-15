/*let a = 10;
alert(a);
alert(a += 10);

let year = 2007;
alert(year);

let nameJavaScript = 'Brendan Eich';
alert(nameJavaScript);

let numberOne = 10;
let numberTwo = 2;
let sum = numberOne + numberTwo;
alert(sum);
let difference = numberOne - numberTwo;
alert(difference);
let product = numberOne * numberTwo;
alert(product);
let quotient = numberOne / numberTwo;
alert(quotient);

let numberThree = 5;
let result = numberTwo ** numberThree;
alert(result);

let b = 9;
let c = 2;
let remainder = b % c;
alert(remainder);

let num = 1;
alert(num);
alert(num += 5);
alert(num -= 3);
alert(num *= 7);
alert(num /= 3);
alert(num++);
alert(num--);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

const user = {
    name: 'Alice',
    age: 23,
    "isAdmin": true
}

let yourName = prompt('Введите ваше имя');
let hello = 'Привет, ' + yourName + ' !';
alert(hello);*/

//Задание 1//
/*let password = 'hello';
let go = prompt('Введите пароль');
if (go === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

//Задание 2//
let c = 2;
if (c >= 0 && c <= 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 3//
let d = 7;
let e = 119;
if (d>=100 || e>100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 4//
let a = '2';
let b = '3';
alert(Number(a) + Number(b));*/

//Задание 5//
let monthNumber = 12;
switch (monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('Такого месяца не существует!');
        break;
}

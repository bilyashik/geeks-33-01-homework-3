// задание 1

let number;

while (true) {
    number = parseInt(prompt("Введите число от 2 до 10"));

    if (!isNaN(number) && number >= 2 && number <= 10) {
        break;
    } else {
        alert("Пожалуйста введите корректное число от 2 до 10");
    }
}

console.log(`Таблица умножения для ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} × ${i} = ${result}`);
}

// задание 2

let userNumber;

while (true) {
    userNumber = parseInt(prompt("Введите целое положительное число"));

    if (!isNaN(userNumber) && userNumber > 0) {
        break;
    } else {
        alert("Пожалуйста введите корректное целое положительное число");
    }
}

let sum = 0;
for (let i = 1; i <= userNumber; i++) {
    sum += i;
}

console.log(`Сумма чисел от 1 до ${userNumber} равна: ${sum}`);

// задание 3

const yearsOfBirth = [2002, 2012, 2013, 2018, 2020, 2018, 2008];

const currentYear = 2023;

let eligibleChildrenCount = 0;

for (let i = 0; i < yearsOfBirth.length; i++) {
    const age = currentYear - yearsOfBirth[i];
    if (age >= 6 && age <= 11) {
        eligibleChildrenCount++;
    }
}

console.log(`${eligibleChildrenCount} детей из ${yearsOfBirth.length} получат подарки на Новый Год`);
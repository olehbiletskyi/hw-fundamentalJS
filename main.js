// task 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».
alert("task 1");
let userAge1 = prompt("Привіт, скільки тобі років?")
alert(`Тобі  ${userAge1}  років!!!))`);

// task 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років. 
alert("task 2");
let userAgreement = confirm ( "Привіт! Я скажу скільки тобі років, якщо ти скажеш мені свій рік народження). Готовий?" );

if (userAgreement) {
    const THIS_YEAR = 2020;
    let userYear = +prompt ( "Напиши свій рік народження" , 1990);
    let userAge = THIS_YEAR - userYear;
    alert ( `Тобі ${userAge} років`);
}

// task 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.
alert("task 3");
alert ( "Привіт! Я вмію обчислювати периметр прямокутника!" );

let height = +prompt ("Введи довжину прямокутника (в метрах):");
let width = +prompt ("Введи ширину прямокутника (в метрах):");
let perimeter = (height + width)*2;
alert ( `Периметр прямокутника ${perimeter} метрів`) 

// task 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі) 
alert("task 4");
let radius = +prompt ("Введи радіус кола",);
alert ( `Площа кола ${Math.PI*Math.pow(radius,2)} метрів квадратних`);

// task 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.
alert("task 5");
let averageSpeed = 50;
let time = +prompt("Скільки годин ви ще будете їхати?");
let way = averageSpeed * time;
alert(` Ви проїдете ${way} кілометрів. Щасливої дороги!`);

// task 6. Реалізуємо конвертер кілометрів в милі і навпаки =)
alert("task 6");
let userIndex = +prompt("Щоб перевести кілометри в милі - введіть цифру 1, щоб перевести милі в кілометри - введіть цифру 2");

if (userIndex == 1) {
    let userKM = +prompt("Введіть число кілометрів");
    let miles = userKM*0.62137;
    alert(`${userKM} кілометрів дорівнюють ${miles} миль`);
} else if (userIndex == 2) {
    let userMiles = +prompt("Введіть число миль");
    let km = userMiles/0.62137;
    alert(`${userMiles} миль дорівнюють ${km} кілометрів`);
}

let answ = confirm("Спробуємо ще раз?");
if (answ) {
    let userIndex = +prompt("Щоб перевести кілометри в милі - введіть цифру 1, щоб перевести милі в кілометри - введіть цифру 2");
    if (userIndex == 1) {
        let userKM = +prompt("Введіть число кілометрів");
        let miles = userKM*0.62137;
        alert(`${userKM} кілометрів дорівнюють ${miles} миль`);
    } else if (userIndex == 2) {
        let userMiles = +prompt("Введіть число миль");
        let km = userMiles/0.62137;
        alert(`${userMiles} миль дорівнюють ${km} кілометрів`);
    }
}

// task 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.
alert("task 7");
const costOfLitre = 23;
const userMoney = +prompt("Введіть наявну у вас суму грошей:");
let qLitres = userMoney/costOfLitre;
alert(`Ви можете купити ${qLitres} літр бензину `);
let userIndex2 = confirm("Купляємо бензин на всі гроші?");
if (userIndex2) {
    alert(`Ви отримаєте ${qLitres} літр бензину. Очікуйте. Дякуємо за покупку! Щасливої дороги!`);
} else {
    let userNeed = +prompt("Введіть потрібну кількість літр:");
    let mustHaveMoney = userNeed*costOfLitre;
    if (mustHaveMoney > userMoney) {
        alert('У вас недостатньо коштів!')
    } else {
        let rest = userMoney - mustHaveMoney;
        alert(` Ви тримаєте ${userNeed} літр, а також решту: ${rest} грн.`);
    }
}
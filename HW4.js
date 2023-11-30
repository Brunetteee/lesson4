// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function cointandReturn (a , b){
    return a * b;
}
let res = cointandReturn(a = 15, b = 15);
console.log(res);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleland (r){
    return r * r * Math.PI;
}
res = circleland(15)
console.log(res)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function returnLand (h,r){
    return 2 * Math.PI * r * h;
}
res = returnLand(10,5 )
console.log(res)


// - створити функцію яка приймає масив та виводить кожен його елемент

let massifs  = ['hello', 'hi' , 'bye' , 'see you'];

function accepts (array){
    for (const arrayElement of array) {
        console.log(arrayElement)
        
    }   
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text (p){
    document.write('<p>Lorem ipsum dolor sit amet</p>');
}
text("Lorem ipsum dolor sit amet")



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlwithLi (){
    document.write ('<ul>')
    document.write ('<li>how are u?</li>')
    document.write ('<li>how are u?</li>')
    document.write ('<li>how are u?</li>')
    document.write ('</ul>')
}
createUlwithLi()



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function  list (text, numbers){
    document.write('<ul>')
    for (let x =0 ; x < numbers;i++ )
        document.write(`<li>Lorem ipsum dolor sit amet, consectetur.</li>`);
    document.write('</ul>')
}
list()
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let i=[78 , 'hello',true];

function list2(i){
    document.write('<ul>');
    for (const iElement of i) {
        document.write('<li> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>')
    }
    document.write('</ul>')
}
list2(i)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id:8392 , name:'vasya', age: 32},
    {id :3792, name: 'masha', age:16},
    {id:1234, name:'katya', age:23},
];
function usersA(array){
    for(let i = 0;i<array.length;i++){
        let arrayElement = array[i];
        document.write(`<div> `+` Id: ${arrayElement.id }<br> `+` Name: ${arrayElement.name} <br> `+` Age: ${arrayElement.age} </div>`)

    }
}
usersA(users)


// - створити функцію яка повертає найменьше число з масиву

let numers = [1,2,3,4,5,6,7,8,9];

function minimum(num){
    let min = num[0];
    for (const numElement of num ) {
        if (numElement < min){
            min = numElement
        }
    }
    return min;
}


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [1,2.10]
function plus(numbers){
    let sum=0;
    for (const number of numbers) {
        sum += numbers;
    }
    return sum
}

console.log(plus(arr));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency){
            return sumUAH / curr.value
        }
        
    }
}

console.log(exchange(10000, [{currency: 'USD' ,value: 40}, {currency: 'EUR' , value: 42}] , 'USD' , 'EUR'))
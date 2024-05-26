// let hoursinday = 24;
// let minutesinhour = 60;
// let secondsinminutes = 60;
// let result = hoursinday * minutesinhour * secondsinminutes
// console.log(result);
// let name = "Алексей";
// let admin = "Навальный";
// let age = 47;
// let probel = " ";
// let admin = name + " " + surname + " " + age;
// alert(admin);

// let age = prompt("Ваш возраст");
// alert("Вам " + age + "лет")
// let
// let login = prompt("Ваш логин");
// let password = prompt("Ваш пароль")
// alert("Пользователь с логином " + login + " и пароем " + password);
// let age = prompt("Ваш возраст");
// if(age >= 18){
//     alert("Добро пожаловать на сайт!");
// }
// else{
//     alert("Вход на сайт запрещён!");
// }
// let name = prompt("Ваше имя");
// let age = prompt("Ваш возраст");
// let money = prompt(name + ", сколько денег на вашем счету?");
// if(money >=1000){
//     alert("Виталий, добро пожаловать на сайт!")
// }
// else{
//     alert(name + ", вы настоящий бич!")
// }
// let phone = {
//     storage: "1tb",
//     camera: "200mp",
//     processor: "Snapdragon 8 Gen 3",
//     call: function(){
//         alert("Телефон звонит");
//     },
//     broke: function(){
//         alert("Телефон сломался");
//     } 
// }
// let color = prompt("Каким цветом сделать сайт?")
// document.bgColor = ""
// let color = prompt("Кактм цветом сделать див?")
// let block = document.getElementById("test");
// block.style.background='#' + color;
function Test() {
// Находим тег с сообщением
let textarea = document.getElementById("textarea");
// Считаем из переменной textarea значение свойства value
let delo = textarea.value
// Создать тег для вывода на экран
    let div = document.createElement("div");
// Записать  внутрь div текст из переменной delo
    div.innerText = delo;
// Простилизуем div, т.е. добавим для div css-класс
div.classList.add("css-delo")
// Выведем div с текстом на страницу
    document.body.append(div);
// Затираем textarea от текста
// Необходимо присвоить пустую строку в свойств value у переменной textarea
let dev = document.getElementById("newReview")
dev.prepend(div);
}
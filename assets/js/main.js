console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
// имя переменной: myStr, значение: 'строка'
var myStr = 'строка';
// имя переменной: myBool, значение: true
var myBool = true;
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
console.log(myNum.toFixed(2));
// decimal2
var decimal2 = myNum.toFixed(2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный .
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i
var i = 1;
console.log(++i); // 1+1 > log=2
console.log(i++); // log=2 > 2+1=3
console.log(i);  // log=3
console.log(--i); // 3-1 > log=2
console.log(i--); // log=2 > 2-1=1
console.log(i);  // log=1
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20;
// +=
myTest += myNum;  // 20+10=30
console.log('+= ' + myTest);
// –=
myTest -= myNum;  // 30-10=20
console.log('-= ' + myTest);
// *=
myTest *= myNum;  // 20*10=200
console.log('*=' + myTest);
// /=
myTest /= myNum;  // 200/10=20
console.log('/=' + myTest);
// %=
myTest %= 6; // 20%6=2
console.log('%/' + myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
var myPi = Math.PI;
console.log(myPi);
// округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);
console.log(myRound);
// случайное число между 0..10 → myRandom
var myRandom = Math.random() * 10;
console.log(myRandom);
// 3 в 5 степени → myPow
var myPow = Math.pow(3, 5);
console.log(myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj
var strObj = {
    str: 'Мама мыла раму, рама мыла маму'
};
strObj.length = strObj.str.length;
console.log(strObj);
/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную
 * strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str.replace('мыла раму, рама мыла', 'моет раму, Рама держит');
console.log(strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log('Верхний регистр - ' + strReplace.toUpperCase());
console.log('Нижний регистр - ' + strReplace.toLowerCase());
document.getElementById("btn1").onclick = task1;
document.getElementById("btn2").onclick = task2;
document.getElementById("btn3").onclick = task3;
document.getElementById("btn4").onclick = task4;
document.getElementById("btn5").onclick = task5;
document.getElementById("btn6").onclick = task6;
document.getElementById("btn7").onclick = task7;

function task1(){
    /*функция выводит в консоль числа от  N до M 
        вместо чисел кратных 3 выводим AAAAA
        вместо чисел кратных 5 выводим ББББ
        вместо чисел кратных 3 и 5 одновременно выводим АБАБАБА
        */
    var numberOne = Number(getElement("task1InputOne"));
    var numberTwo = Number(getElement("task1InputTwo"));
    if(isNaN(numberOne) || isNaN(numberTwo)){
        printRes("result1", "Ошибка в формате ввода");
        return;
    }
    if(numberOne>numberTwo){
        printRes("result1", "Число N больше числа M");
    }
    else{
        printRes("result1", "Смотри в консоль");
        for(var i = numberOne; i <= numberTwo; i++){
            if(!(i%3) && !(i%5)){
                console.log("АБАБАБА");
            }
            else if(!(i%3)){
                console.log("AAAAA");
            }
            else if(!(i%5)){
                console.log("ББББ");
            }
            else{
                console.log(i);
            }
        }
    }
}

function printRes(elementId, text){
    document.getElementById(elementId).innerHTML = text;
}
function getElement(elementId){
    return document.getElementById(elementId).value;
}

//Задача 2-----------------------------------------------------
function task2(){
    /*print(N,M)
    функция выводит в консоль числа от  N до M    N>=1 M<100   на русском языке 
    22 (двадцать два) и тд*/
    var numberOne = Number(getElement("task2InputOne"));
    var numberTwo = Number(getElement("task2InputTwo"));    
    if(numberOne<1 || numberTwo >=100){
        printRes("result2", "Числа не заданном в диапазоне");
    }
    else {
        printRes("result2", "Смотри в консоль");
        print(numberOne, numberTwo);
    }
    
}

function print(N, M){
    var numberNameArr = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девядцать"];
    var decimalValues = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемдесят", "девяноста"];
    var result ='';
    for(var i = N; i <= M ; i++){
            if(i>0 && i<=13){
                console.log(numberNameArr[i]);
            }
            else if(i>13 && i<=19){
                result = numberNameArr[i%10].slice(0,-1)+ "надцать";
                console.log(result);
            }
            else {
                result = decimalValues[parseInt(i/10)-2] + ' '+ numberNameArr[i%10];
                console.log(result);
            }
    }          
}

// Задача 3------------------------------------------------
function task3(){
    printReadable(0, 1, 2 ,3 );
}

function printReadable(){
    for(var i = 0; i< arguments.length; i++){
        if(!arguments[i]){
            console.log("ноль");
        }
        else{
            print(arguments[i],arguments[i]);
        }
    }
}

// Задача 4-------------------------------------------
function task4(){
    //findMax(x,y)  возвращает большее число из переданных
    var numberOne = Number(getElement("task4InputOne"));
    var numberTwo = Number(getElement("task4InputTwo"));   
    var result = findMax(numberOne, numberTwo);
    printRes("result4", result);

}

function findMax(){
    var max = arguments[0]
    for(var i = 0; i< arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

// Задача 5--------------------------------------
function task5(){
   // isLuckyTicket('123321')  true|false      билет является счастливым если сумма чисел в двух половинках равна
    var numberTicket = getElement("task5InputOne");
    var result = isLuckyTicket (numberTicket);
    printRes("result5", result);
}

function isLuckyTicket(ticket){
    var isItEven = !(ticket.length%2); 
    var leftSide = 0;
    var rightSide = 0;
    for(var i = 0 ; i < ticket.length; i++){
        if(i<parseInt(ticket.length/2)){
            leftSide += Number(ticket[i]);
        }
        else{
            if(!isItEven&&i===parseInt(ticket.length/2)){
                continue;
            }
            rightSide += Number(ticket[i]);}
    }
    return(leftSide===rightSide);
}

// Задача 6--------------------------------------

function task6(){
//gameGuessNumber(0,100) игра выводит сообщения с помощью confrim | prompt     программа должна угадать загаданное тобой число  (использовать метод бинарного поиска)
    var result = gameGuessNumber(0, 100);
    alert("Задуманное число " + result);
}


function gameGuessNumber(a, b){
    var middleOfNumber = parseInt((a+b)/2);
    var numberIsGreater = confirm("Задуманное Число больше " + middleOfNumber +"?");
    numberIsGreater ? a = middleOfNumber+1 : b = middleOfNumber;
    if(!(b-a)){
        return a;
    }
    return gameGuessNumber(a,b);
}


// Задача 7--------------------------------------

/*   clearStr('  фыв афа фывфыв ййцк й фыв  ')  очистить строку от пробелов 
uniqSymbols('  фыв афа фывфыв ййцк й фыв  ') вернуть строку без пробелов в которой будут только уникальные символы из строки
clearOdd('  фыв  афа фывфыв      ййцк й фыв  ')  очистить строку от лишних пробелов (в начале и конце и строки,  двойные пробелы между словами заменить одинарными)
longestWord('  фыв  афа фывфыв      ййцк й фыв  ')  найти самое длинное слово в строке
changeSymbol('asvadsa','a','x') => 'xsvxdsx'
doubleSymbol('abcd') => 'aabbccdd'
поделить массив на части указанные в параметре */

function task7(){
    var clearStrText = getElement("task7clearStr");
    var uniqSymbolsText = getElement("task7uniqSymbols");
    var clearOddText = getElement("task7clearOdd");
    var longestWordText = getElement("task7longestWord");
    var changeSymbolText = getElement("task7changeSymbol");
    var doubleSymbolText = getElement("task7doubleSymbol");
    var result = '';
    if(clearStrText.length){
        result = clearStr(clearStrText);
        console.log("clearStr: "+clearStrText+" -------> "+result)
    }
    if(uniqSymbolsText.length){
        result = uniqSymbols(uniqSymbolsText);
        console.log("uniqSymbols: "+uniqSymbolsText+" -------> "+result)
    }
    if(clearOddText.length){
        result = clearOdd(clearOddText);
        console.log("clearOdd : "+clearOddText+" -------> "+result)
    }
    if(longestWordText.length){
        result = longestWord(longestWordText);
        console.log("longestWord : "+longestWordText+" -------> "+result)
    }
    if(changeSymbolText.length){
        result = changeSymbol(changeSymbolText, "a", "x");
        console.log("changeSymbol : "+changeSymbolText+" -------> "+result)
    }
    if(doubleSymbolText.length){
        result = doubleSymbol(doubleSymbolText);
        console.log("doubleSymbol : "+doubleSymbolText+" -------> "+result)
    }    
}

function clearStr(text){
    var result ='';
    for(var i = 0; i<text.length; i++){
        if(text[i]!==" "){
            result+=text[i];
        }
    }
    return result;
}

function uniqSymbols(text){
    var result ='';
    for(var i = 0; i<text.length; i++){
        if(text[i]!==" "&&!(result.indexOf(text[i])+1)){
            result+=text[i];
        }
    }
    return result;
}

function clearOdd(text){
    var result ='';
    for(var i = 0; i<text.length; i++){
        if(!result.length&&text[i]!==' '){
            result+=text[i];
        }
        else if(result.slice(-1)===' '&&text[i]===' '){
            continue;
        }
        else if(result.length){
            result+=text[i];
        }
    }
    for(;;){
        if(result.slice(-1)===' '){
            result = result.slice(0, -1);
        }
        else{
            break;
        }
    }
    return result;    
}

function longestWord(text){
    var word ='';
    var wordsArr = [];
    var result = 0;
    text+=" ";
    for(var i = 0; i<text.length; i++){
        if(text[i]!==" "){
            word+=text[i];
        }
        else{
            if(word.length){
                wordsArr.push(word);
            }
            word='';
        }
    }
    wordsArr.forEach(function(element, index) {
        if(wordsArr[result].length < element.length){
            result = index;
        }
    });
    return wordsArr[result];
}

function changeSymbol(text, receivedCharacter, returnCharacter){
    var result ='';
    for(var i = 0; i<text.length; i++){
        if(text[i]==receivedCharacter){
            result+=returnCharacter;
        }
        else{
            result+=text[i];
        }
    }
    return result;
    
}

function doubleSymbol(text){
    var result ='';
    for(var i = 0; i<text.length; i++){
            result+=text[i]+text[i];
    }
    return result;
}





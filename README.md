# first-tasks-from-Gena
tasks with strings, arrays, objects
функция выводит в консоль числа от  N до M 
вместо чисел кратных 3 выводим AAAAA
вместо чисел кратных 5 выводим ББББ
вместо чисел кратных 3 и 5 одновременно выводим АБАБАБА
print(N,M)
функция выводит в консоль числа от  N до M    N>=1 M<100   на русском языке 
22 (двадцать два) и тд
printReadable(0,1)
ноль
один
findMax(x,y)  возвращает большее число из переданных
isLuckyTicket('123321')  true|false      билет является счастливым если сумма чисел в двух половинках равна
gameGuessNumber(0,100) игра выводит сообщения с помощью confrim | prompt     программа должна угадать загаданное тобой число  (использовать метод бинарного поиска)
clearStr('  фыв афа фывфыв ййцк й фыв  ')  очистить строку от пробелов 
uniqSymbols('  фыв афа фывфыв ййцк й фыв  ') вернуть строку без пробелов в которой будут только уникальные символы из строки
clearOdd('  фыв  афа фывфыв      ййцк й фыв  ')  очистить строку от лишних пробелов (в начале и конце и строки,  двойные пробелы между словами заменить одинарными)
longestWord('  фыв  афа фывфыв      ййцк й фыв  ')  найти самое длинное слово в строке
changeSymbol('asvadsa','a','x') => 'xsvxdsx'
doubleSymbol('abcd') => 'aabbccdd'
поделить массив на части указанные в параметре

partsSplit(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 partsSplit(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
Возвращает данные из первого массива, которые не присутствуют во втором 
difference([2, 1], [2, 3]); => [1]
difference([2, 1,4], [2, 3,1,4]); => []
вернуть только уникальные значения 
uniq([1,1,1,1,1,1]) => [1]
удаляет один елемент из массива по индексу
remove([1,2,3],1)=> [1,3]
наполняет массив значениями от start до end с шагом значения step 
upfill(array,start,end,step)
upfill([],0,10,5) => [0,5,10]
возвращает индекс значения в массиве 
findIndex(['a','b','c'],'c') =>2 
findIndex(['a','b','c'],'x') =>-1
не используя indexOf )))
вовзвращает значения которые присутствуют во всех массивах (работает с любым количеством массивов) 

intersection([1,2,3],[2,3]) => [2,3]
intersection([1,2,3],[2,3],[1]) => []
intersection([1,2,3],[2,3],[2]) => [2]
вовзрашащает последний елемент массива
last([1, 2, 3]); => 3
не используя стандартный метод сортировки сделать эти методы:

sortBubble(arr)   сортирует массив методом пузырька (парные перестановки) 
sortMin(arr)   сортирует массив методом вставки минимального числа в начало 
sortSymmetry(arr)    [5,1,2,-1,-10,2,5,7] => [1,2,2,5,5,7,-1,-5,-10]  сортирует позитивные в порядке возрастания, а отрицательные в поярдке убывания, отрицательные всегда в конце
fromPairs([1,2,3,4,5]) => {1:2,3:4,5:undefined}
toPairs({a:1,b:2}) => ['a',1,'b',2]
findValuesByKeyInclusion({a:3,bc:4,abcd:1,abc:2},'bc') => [4,1,2]
mergeSmartKeep({a:1,b:4,x:'a'},{c:5,a:2,x:{y:3}}) => {a:[1,2],b:4,c:5,x:['a',{y:3}]}
has({a:2},'a') => true
mapValues({a:1,b:2},  val=> val*2  ) => {a:2,b:4}
mapKeys({a:1,b:2}, key=> key+'_lol') => {a_lol:1,b_lol:2}
pick({a:1,b:2,c:3,x:null},['a','d','x']) => {a:1,x:null}
omit({a:1,b:2,c:3,x:null},['a','d','x']) => {b:2,c:3}
valByPath({a:{b:{c:3}}}, 'a.b.c') => 3
valByPath({a:{b:{c:3}}}, 'a.b') => {c:3}
findKeyByVal( {a:1,b:2,x:1}, val=> val==1) => 'a'
difference({a:1,b:2},{a:3},{c:4}) => {b:2}
intersectionSmartMerge({a:1,b:2},{a:3},{a:5,c:4}) => {a:[1,3,5]}
reduce({a:2,c:4,x:5}, 0, (key,value,accumulator)=> key<='c' ? accumulator : accumulator+value )  => 6
reduce({a:2,c:4,x:5}, 2, (key,value,accumulator)=> key<='c' ? accumulator : accumulator+value )  => 8
reduce({a:2,c:4,x:5}, 0, (key,value,accumulator)=> accumulator+value ) => 11
asyncLogger([{message:'hello',delay:1000},{message:'world',delay:10000}], function(){console.log('all done')})
первый аргумент -  массив обьектов в каждом из которых 
message  = сообщение которое нужно залогировать 
delay = задержка логирования в миллисекундах

второй аргумент  = функция которая выполнится когда все асинхронные  методы выполнились
plannedActions ([
 {time: Date.now()-1,action:()=>{console.log(1)},{time: Date.now()+1000,action:()=>{console.log(2)},{time: Date.now()+5000,action:()=>{console.log(3)}
])

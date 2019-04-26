/*поделить массив на части указанные в параметре

partsSplit(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 partsSplit(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
Возвращает данные из первого массива, которые не присутствуют во втором 
difference([2, 1], [2, 3]); => [1]
difference([2, 1,4], [2, 3,1,4]); => []  ---СХЕРАЛИ ТУТ ПУСТО? =)
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

*/

document.getElementById("btn8").onclick = task8;

function partsSplit(symbolArr, amount){
    var result = [];
    var tmp = [];
    symbolArr.forEach(function(element, index) {
        if(index && !(index%amount)){
            result.push(tmp);
            tmp = [];           
        }
        tmp.push(element);
    });
    result.push(tmp);
    return result;
}

function difference(arrOne, arrTwo){
    var result = [];
    arrOne.forEach(function(element){
        var findIndex = arrTwo.indexOf(element);
        if(findIndex==-1){
            result.push(element);
            
        }
        else{
            arrTwo.splice(findIndex, 1);
        }
    });
    arrTwo.forEach(function(element){
       result.push(element);
    });
    return result;
}

function uniq(arr){
    var result =[];
    arr.forEach(function(element){
        if(result.indexOf(element)===-1){
            result.push(element);
        }    
    }); 
    return result;
}

function remove(arr, index){
    //если не использовать splice
    if(arr.length<index||index<0){
        return arr;
    }
    var result =[];
    arr.forEach(function(element,ind){
        if(ind!==index){
            result.push(element);
        }
    });
    return result;
}

function upfill(array,start,end,step){
    // по условию не понятно, что будет в случае если end-start не крастно step
    for(var i = start; i <= end; i+=step){
        array.push(i);
    }
}

function findIndex(arr, findSymbol){
    var result = -1;
    for(var i =0; i < arr.length; i++){
        if(arr[i]===findSymbol){
            result = i;
        }
    }
    return result;
}

function intersection(){
    var result = [];
    if(arguments.length>0){
        result = arguments[0].slice();
    }
    
    for(var i = 1; i< arguments.length; i++){
        var tmp = [];
        arguments[i].forEach(function(element) {
            if(result.indexOf(element)>=0){
                tmp.push(element);         
            }
        });
        result = tmp;
    }
    return result;
}

function last(arr){
    return arr[arr.length-1];
}

function sortBubble(arr){
    var tmp = 0;
    for (var i = 0 ; i< arr.length-1; i++){
        for (var j = 0; j < arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}

function sortMin(arr){
    // если постоянно вставляем в начало минимально найденное значение, получаем в результате массив от большего к меньшему. Возможно не так понял задачу, нужны детали
    var tmp = [];
    var arrLength = arr.length;
    for(var i = 0; i <arrLength; i++){
        var index = 0;
        for(var j = 1; j < arr.length ; j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        tmp.unshift(arr[index]);
        arr.splice(index,1);
    }
    for(var i = 0; i <tmp.length; i++){
        arr.push(tmp[i]);
    }
}

function sortSymmetry(arr){
    var tmpPlus =[], tmpMinus = [];
    for(var i = 0; i <arr.length; i++){
        if(arr[i]>=0){
            tmpPlus.push(arr[i]);
        }
        else{
            tmpMinus.push(arr[i]);
        }
    }
    sortBubble(tmpPlus);
    sortMin(tmpMinus);
    var result = tmpPlus.concat(tmpMinus);
    arr.length = 0;
    for(var i = 0; i <result.length; i++){
        arr.push(result[i]);
    }
}

function task8(){
    var result ='';
    result = partsSplit(['a', 'b', 'c', 'd'], 2);
    console.log("partsSplit(['a', 'b', 'c', 'd'], 2) ------>");
    console.log(result);
    
    result = partsSplit(['a', 'b', 'c', 'd'], 3);
    console.log("-------------------------------------------");
    console.log("partsSplit(['a', 'b', 'c', 'd'], 3) ------>");
    console.log(result);

    result = difference([2, 1], [2, 3]);
    console.log("-------------------------------------------");
    console.log("difference([2, 1], [2, 3]) ------>");
    console.log(result);    
    
    result = difference([2, 1,4], [2, 3,1,4]);
    console.log("-------------------------------------------");
    console.log("difference([2, 1,4], [2, 3,1,4]) ------>");
    console.log(result);    
  
    result = uniq([1,1,1,1,1,1,2,5,2,2,5,5,1,5,2,5]);
    console.log("-------------------------------------------");
    console.log("uniq([1,1,1,1,1,1,2,5,2,2,5,5,1,5,2,5]) ------>");
    console.log(result);    
     
    result = remove([1,2,3],1);
    console.log("-------------------------------------------");
    console.log("remove([1,2,3],1) ------>");
    console.log(result);      

    var arrUpfill = [];
    upfill(arrUpfill,10,60,5);
    console.log("-------------------------------------------");
    console.log("upfill([],10,60,5) ------>");
    console.log(arrUpfill); 
    
    result = findIndex(['a','b','c'],'c');
    console.log("-------------------------------------------");
    console.log("findIndex(['a','b','c'],'c') ------>");
    console.log(result);
    
    result = findIndex(['a','b','c'],'x');
    console.log("-------------------------------------------");
    console.log("findIndex(['a','b','c'],'x') ------>");
    console.log(result);
    
    result = intersection([1,2,3],[2,3]);
    console.log("-------------------------------------------");
    console.log("intersection([1,2,3],[2,3]) ------>");
    console.log(result);
    
    result = intersection([1,2,3],[2,3],[1]);
    console.log("-------------------------------------------");
    console.log("intersection([1,2,3],[2,3],[1]) ------>");
    console.log(result);    
    
    result = intersection([3,2,1],[2,3],[2]);
    console.log("-------------------------------------------");
    console.log("intersection([1,2,3],[2,3],[2]) ------>");
    console.log(result);    
    
    result = last([1, 2, 5]);
    console.log("-------------------------------------------");
    console.log("last ------>");
    console.log(result);    
    
    var sortArrBubble = [5,1,2,-1,-10,2,5,7];
    console.log("-------------------------------------------");
    console.log("sortBubble([5,1,2,-1,-10,2,5,7]) ------>");
    sortBubble(sortArrBubble);
    console.log(sortArrBubble); 
    
    var sortArrMin = [5,1,2,-1,-10,2,5,7];
    console.log("-------------------------------------------");
    console.log("sortMin([5,1,2,-1,-10,2,5,7]) ------>");
    sortMin(sortArrMin);
    console.log(sortArrMin);    
    
    var sortArrSymmetry = [5,1,2,-1,-10,2,5,7, -5];
    console.log("-------------------------------------------");
    console.log("sortSymmetry([5,1,2,-1,-10,2,5,7, -5]) ------>");
    sortSymmetry(sortArrSymmetry);
    console.log(sortArrSymmetry);   
    
}


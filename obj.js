/*fromPairs([1,2,3,4,5]) => {1:2,3:4,5:undefined}
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
difference({a:1,b:2},{a:3},{c:4}) => {b:2}   ---- не понятно условие, почему b:2 в ответе
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
])*/



function fromPairs(arr){
    var result = {};
    for(var i = 0; i < arr.length; i+=2){
        result[arr[i]] = arr[i+1];
    }
    return result;
}

function toPairs(incomingObj){
    var result = [];
    for (var key in incomingObj) {
        result.push(key);
        result.push(incomingObj[key]);
    }
    return result;
}

function findValuesByKeyInclusion(incomingObj, findKey){
    var result = [];
    for (var key in incomingObj) {
        if(key.indexOf(findKey)+1){
            result.push(incomingObj[key]);
        }
    }
    return result;
}

function mergeSmartKeep(){
    var result = {};
    for(var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]) {
            if(!(key in result)){
                result[key] = [];
            }
            result[key].push(arguments[i][key]);
        }
    }
    return result;   
}

function has (incomingObj, findKey){
    if(incomingObj[findKey]!=undefined){
        return true;
    }
    else{
        return false;
    }
}

function mapValues(incomingObj, act){
    var result = {};
    for (var key in incomingObj) {
        result[key] = act(incomingObj[key]);
    }
    return result;
}

function mapKeys(incomingObj, act){
    var result = {};
    for (var key in incomingObj) {
        result[act(key)] = incomingObj[key];
    }
    return result;
}

function pick(incomingObj, keys){
    var result = {}; 
    keys.forEach(function(key) {
       if(key in incomingObj){
           result[key] = incomingObj[key];
       }
    });
    return result;
}

function omit(incomingObj, keys){
    var result = {}; 
    for (var key in incomingObj) {
        if(keys.indexOf(key)===-1){
            result[key] = incomingObj[key];          
        }
    }
    return result;
}

function valByPath(incomingObj, path){
    var stepsArr = path.split('.');
    var result = incomingObj;
    stepsArr.forEach(function(step) {
        result = result[step];
    });
    return result;
}

function findKeyByVal(incomingObj, func){
    for (var key in incomingObj) {
        if(func(incomingObj[key])){
            return key;
        }
    }
}

function intersectionSmartMerge(){
    var result = {};
    var finalResult = {};
    for(var i = 0; i < arguments.length; i++){
        for (var key in arguments[i]) {
            if(!(key in result)){
                result[key] = [];
            }
            result[key].push(arguments[i][key]);
            if(result[key].length === arguments.length){
                finalResult[key] = result[key];
            }
        }
    }
    return finalResult;  
}

function reduce(incomingObj, val, func){
    //если в стрелочной функции тут "key<='c' ? accumulator : accumulator+value" была ошибка, то я исправил, если нет, то нужно обсудить задачу
    for (var keys in incomingObj) {
        val = func(keys, incomingObj[keys], val);
    }    
    return val;
}


function asyncLogger(arr, func){
    arr.forEach(function(item, i) {
       var time = parseInt(item.delay);
       setTimeout(() => {
              console.log(item.message);
              if(i+1 === arr.length){
                  func();
              }
        }, time);
    });  
}


function plannedActions(arr){
    var now = new Date().getTime(); 
    arr.forEach(function(item) {
        var timeForSetTimeout = parseInt(item.time-now);
        setTimeout(() => {
           item.action();
        }, timeForSetTimeout);
    });      
}

document.getElementById("btn9").onclick = task9;
document.getElementById("btn9_2").onclick = task9_2;
document.getElementById("btn9_3").onclick = task9_3;


function task9(){
    var resultFromPairs = fromPairs([1,2,3,4,5]);
    console.log(resultFromPairs);
    var resultToPairs = toPairs({a:1,b:2});
    console.log(resultToPairs);
    var resultFind = findValuesByKeyInclusion({a:3,bc:4,abcd:1,abc:2},'bc');
    console.log(resultFind);
    var resultSmartKeep = mergeSmartKeep({a:1,b:4,x:'a'},{c:5,a:2,x:{y:3}});
    console.log(resultSmartKeep);
    var resultHas = has({a:2},'a');
    console.log(resultHas);
    var resultMapValues = mapValues({a:1,b:2}, val=> val*2);
    console.log(resultMapValues);
    var resultMapKeys = mapKeys({a:1,b:2}, key=> key+'_lol');
    console.log(resultMapKeys);
    var resultPick = pick({a:1,b:2,c:3,x:null},['a','d','x']) ;
    console.log(resultPick);
    var resultOmit = omit({a:1,b:2,c:3,x:null},['a','d','x']);
    console.log(resultOmit);
    var resultValByPath  = valByPath({a:{b:{c:3}}}, 'a.b.c');
    console.log(resultValByPath);
    var resultValByPath2  = valByPath({a:{b:{c:3}}}, 'a.b');
    console.log(resultValByPath2);
    var resultFindKeyByVal = findKeyByVal( {a:1,b:2,x:1}, val=>val==1);
    console.log(resultFindKeyByVal);
    var resultMerge = intersectionSmartMerge({a:1,b:2},{a:3},{a:5,c:4});
    console.log(resultMerge);
    var resReduce1 = reduce({a:2,c:4,x:5}, 0, (key,value,accumulator)=> key<='c' ? accumulator+value : accumulator );
    console.log(resReduce1);
    var resReduce2 = reduce({a:2,c:4,x:5}, 2, (key,value,accumulator)=> key<='c' ? accumulator+value : accumulator );
    console.log(resReduce2);
    var resReduce3 = reduce({a:2,c:4,x:5}, 0, (key,value,accumulator)=> accumulator+value );
    console.log(resReduce3);
    
}

function task9_2(){
    asyncLogger([{message:'hello',delay:1000},{message:'world',delay:10000}], function(){console.log('all done')});
}
function task9_3(){
    plannedActions ([
     {time: Date.now()-1,action:()=>{console.log(1)}},{time: Date.now()+1000,action:()=>{console.log(2)}},{time: Date.now()+5000,action:()=>{console.log(3)}}
    ]);
}


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
/*************************      OBJECTS          ************************************ */
/*
To use object type, should specified the types and element it's contains as below

*/
var person = {
    name: "mohammed",
    age: 40
};
//console.log(person.name +" " +person.age );
/*************************      ARRAYS          ************************************ */
var arr;
arr = ['mohammed', '22'];
var arrAny;
arrAny = [
    100,
    'test is done!',
    person
];
/*
for(const i of arr){
    console.log(i.toUpperCase());// to call elements in string array as upper case.
}

console.log(arrAny[2]);//To get object from array...
*/
/*************************      TUPLES          ************************************ */
//tuple : is an array with limitation type and length.
var tupleConst = {
    name: 'mohammed',
    age: 40,
    infoString: ['Iraq', 'UK'],
    info: [20, 'BSc']
};
tupleConst.info.push(100);
//console.log(tupleConst.info);
/*************************      ENUM          ************************************ */
var eLeve;
(function (eLeve) {
    eLeve["l1"] = "level_1";
    eLeve["l2"] = "level_2";
    eLeve["l3"] = "level_3";
})(eLeve || (eLeve = {}));
function check(num) {
    if (num === 1) {
        return eLeve.l1;
    }
    else if (num === 2) {
        return eLeve.l2;
    }
    else {
        return eLeve.l3;
    }
}
var c = check(1);
//console.log(c);
/*************************      ANY          ************************************ */
//Any : it is a type that mean any type is available
//try to avoid any what ever you can because it will take the type advantage that you get by typescript.
/*************************      UNION          ************************************ */
//Union: to gother more one type in one variable
function concat(param1, param2) {
    var result;
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        result = param1 + param2;
    }
    else {
        result = param1.toString() + ' ' + param2.toString();
    }
    return result;
}
//console.log(concat(20,50));
//console.log('Mohammed','Alfadhel');
/*************************      LITERAL          ************************************ */
var vars;
function literalTest(num1, num2, vars) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' || vars === 'IsNumber') {
        result = +num1 + +num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string' || vars === 'IsString') {
        result = num1 + ' ' + num2;
    }
    else {
        return;
    }
    return result;
}
function checkAliases(f) {
    if (f === 'pros') {
        return 'it is true';
    }
    else {
        return 'it is false';
    }
}
//console.log(checkAliases('cons'));
//console.log(checkAliases('pros'));
/*************************      FUNCTION TYPE          ************************************ */
//There are three types of functions:
/*
1- normal type
2- void
3- undefined
*/
/* 1 : specified the type with return same type function*/
function typeNormalFunc(param) {
    return (param + 100).toString();
}
/* 2 : not hold any type without return any value*/
function typeVoidFunc(param) {
    param + 100;
}
/* 3 : not hold any type with return nothing ---- avoidable by type script*/
function typeUndefinedFunc(param) {
    (param + 100).toString();
    return;
}
var val1 = typeNormalFunc;
//console.log(val1(10));// 110
var val2 = typeVoidFunc(10);
//console.log(val2);// undefind
var val3 = typeUndefinedFunc(10);
//console.log(val3);// undefined
/*************************      FUNCTION AS A TYPE          ************************************ */
var functionType; //To define a type function for variable.
var functionTypeSpecific; // To use type as function
function adding(n1, n2) {
    return n1 !== null && n2 !== null ? n1 + n2 : 0;
}
functionType = adding;
//console.log(functionType(100,300)/*the type is any*/);
functionTypeSpecific = adding;
//console.log(functionTypeSpecific(10,50)/*there is limitation to use type*/);
var funcVal;
funcVal = adding;
//console.log(funcVal(null, null));
/*************************      TYPE AND CALLBACKS AS A TYPE          ************************************ */
//It is about using a function as param type
function abs(num1, r /*as a type*/) {
    r(num1);
    return num1;
}
var v = abs;
console.log(v);
/*************************      NEVER TYPE         ************************************ */
function Err(str, num) {
    throw { str: str, num: num };
}
console.log(Err('no entries', 500)); // undefine value
Err('no entries', 500); //uncatch value

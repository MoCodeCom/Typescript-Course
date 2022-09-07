/*************************      OBJECTS          ************************************ */

/*
To use object type, should specified the types and element it's contains as below

*/ 

const person:/*object type*/{name:string, age:number} = {
name : "mohammed",
age:40
};

//console.log(person.name +" " +person.age );


/*************************      ARRAYS          ************************************ */

let arr:string[];
arr  = ['mohammed', '22']


let arrAny:any[];
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
const tupleConst:{
    name:string,
    age:number,
    infoString:string[],
    info:[number, string]// to give an array more than one type
} = {
    name:'mohammed',
    age:40,
    infoString : ['Iraq', 'UK'],
    info:[20, 'BSc']
}


tupleConst.info.push(100);
//console.log(tupleConst.info);

/*************************      ENUM          ************************************ */

enum eLeve {l1='level_1', l2='level_2', l3 ='level_3'}
function check (num:number){
    if(num === 1){
        return eLeve.l1;
    }else if(num === 2){
        return eLeve.l2;
    }else{
        return eLeve.l3
    }
}

const c = check(1);
//console.log(c);

/*************************      ANY          ************************************ */

//Any : it is a type that mean any type is available
//try to avoid any what ever you can because it will take the type advantage that you get by typescript.

/*************************      UNION          ************************************ */

//Union: to gother more one type in one variable
function concat(param1:string|number, param2:string|number){
let result;

if(typeof param1 === 'number' && typeof param2 === 'number'){
    result = param1 + param2;
}else{
    result = param1.toString() + ' ' +param2.toString() 
}
return result;
}

//console.log(concat(20,50));
//console.log('Mohammed','Alfadhel');

/*************************      LITERAL          ************************************ */
let vars:'IsNumbers'|'IsString';

function literalTest(num1:number|string, num2:number|string, vars:'IsString'|'IsNumber'|string){
    let result;
    if(typeof num1==='number' && typeof num2==='number' || vars === 'IsNumber'){
        result = +num1 + +num2;
    }else if(typeof num1==='string' && typeof num2==='string' || vars === 'IsString'){
        result = num1 + ' ' +num2; 
    }else{
        return;
    }
    return result;
}

//console.log(literalTest(20,55,'IsNumber'));
//console.log(literalTest('Mohammed','Alfadhel','IsString'));
//console.log(literalTest('Mohammed',100,'nothing'));


/*************************      ALIASES          ************************************ */
//Aliases: it is one to costomise type in the type script, It could be very useful with the union types.

type Features= 'pros'|'cons';

function checkAliases(f:Features){
    if(f === 'pros'){
        return 'it is true';
    }else{
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
function typeNormalFunc(param:number):string{
return (param + 100).toString();
}

/* 2 : not hold any type without return any value*/
function typeVoidFunc(param:number):void{
    param + 100;
    }
/* 3 : not hold any type with return nothing ---- avoidable by type script*/
function typeUndefinedFunc(param:number):undefined{
    (param + 100).toString()
    return;
    }

    const val1 = typeNormalFunc;
    //console.log(val1(10));// 110

    const val2 = typeVoidFunc(10);
    //console.log(val2);// undefind

    const val3 = typeUndefinedFunc(10);
    //console.log(val3);// undefined


/*************************      FUNCTION AS A TYPE          ************************************ */

    let functionType:Function; //To define a type function for variable.
    let functionTypeSpecific :/*function as type*/(a:number, b:number) => number;// To use type as function
    type funct=Function;

    function adding(n1:number, n2:number){
        return n1!== null&& n2!== null?n1 + n2:0;
    }

    functionType = adding;
    //console.log(functionType(100,300)/*the type is any*/);
    functionTypeSpecific = adding;
    //console.log(functionTypeSpecific(10,50)/*there is limitation to use type*/);

    let funcVal:funct;
    funcVal = adding;
    //console.log(funcVal(null, null));

    /*************************      TYPE AND CALLBACKS AS A TYPE          ************************************ */

    //It is about using a function as param type
    function abs(num1:number, r:(num:number) => void/*as a type*/){
        r(num1);
        return num1;
    } 

    let v = abs;
    console.log(v);

/*************************      NEVER TYPE         ************************************ */

function Err(str:string, num:number):never/*To define the function never return any kind of type*/{
    throw {str, num};
}

console.log(Err('no entries', 500));// undefine value
Err('no entries', 500);//uncatch value




enum levelScore{
    accountant,
    engineering,
    science,
    english
}

function check(score:number){
    if(score > 80 && score < 100){
        return levelScore.engineering;
    }else if(score>70 && score<80 ){
        return  levelScore.science.valueOf().toString();
    }else if(score >60 && score < 70){
        return  levelScore.accountant;
    }else{
        return  levelScore.english;
    }
}

const results = check(77);
console.log("the result is : " + results);

/*
function add(n1:number, n2:number){
    return n1 + n2;
}
const num1 = 10;
const result = add(num1,5);
console.log(result);
console.log(typeof(num1));
*/
const sumAll = function(a,b) {
    let sum = 0;
    if(typeof(a)!=='number' || typeof(b)!=='number' || a<0 || b<0){
        return 'ERROR'
    }
    if(a>b){
        let aux = b;
        b = a;
        a=aux;
    }
    for (a;a<=b;a++){
        sum+=a;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

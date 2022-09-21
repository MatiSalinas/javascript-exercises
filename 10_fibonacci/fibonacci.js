const fibonacci = function(a) {
    let num = parseInt(a);
    if(num < 0){
        return 'OOPS'
    }
    sequence = [1,1];
    if(num == 1 || num == 2){
        return sequence[num-1]
    }else{
        for(let i = 2 ; i<=num;i++){
            fiboNum = sequence[i-1] + sequence [i-2];
            sequence.push(fiboNum)
        }
        return sequence[num-1];
    }
    

};

// Do not edit below this line
module.exports = fibonacci;

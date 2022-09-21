const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[\W_]+/g,"");

    let j = newStr.length - 1;
    let palin = false
    for (let i = 0; i < newStr.length ; i++){
        if(newStr[i]==newStr[j]){
            if (i == parseInt(newStr.length/2)){
                palin = true;
                console.log(palin)
                break;
            }
            j--;
        }else{
            break;
        }
    }
return palin
    
};

// Do not edit below this line
module.exports = palindromes;

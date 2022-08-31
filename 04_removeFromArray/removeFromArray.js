const removeFromArray = function(arr,...p) {
    for (const a of p)
    {
        const index = arr.indexOf(a)
        if (index > -1)
        {
            arr.splice(index,1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

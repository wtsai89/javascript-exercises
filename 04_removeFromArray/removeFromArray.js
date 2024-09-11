const removeFromArray = function(array, ...removed) {
    for(const num of removed) {
        for(let i = 0; i < array.length; i++) {
            while (array[i] === num) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

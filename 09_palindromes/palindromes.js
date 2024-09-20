const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = str.split("");
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let letters = arr.filter(c => alphanumerical.includes(c));
    let reverse = letters.slice().reverse().join("");
    let rejoin = letters.join("");
    return reverse === rejoin;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;

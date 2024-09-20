const fibonacci = function(member) {
    member = parseInt(member);
    if(member < 0) return "OOPS";
    if(member === 0) return 0;
    let sequence = [1,1];
    for(let i = 2; i < member; i++) {
        sequence.push(sequence.at(-1)+sequence.at(-2));
    }
    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;

const findTheOldest = function(people) {
    return people.reduce((oldest,item) => {
        const currYear = new Date().getFullYear();
        let oldestAge;
        let itemAge;
        if (oldest.hasOwnProperty("yearOfDeath"))
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        else
            oldestAge = currYear - oldest.yearOfBirth;

        if (item.hasOwnProperty("yearOfDeath"))
            itemAge = item.yearOfDeath - item.yearOfBirth;
        else
            itemAge = currYear - item.yearOfBirth;
        
        if (oldestAge > itemAge)
            return oldest;
        else
            return item;
    },0)
};

// Do not edit below this line
module.exports = findTheOldest;

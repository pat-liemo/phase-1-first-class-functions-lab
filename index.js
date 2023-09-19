// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

function createFareMultiplier(num) {
    return function(fare) {
       return fare * num;
    };
};

const fareDoubler = function(fare) {
    return fare * 2;
 };

 const fareTripler = function(fare) {
    return fare * 3;
 };

function selectDifferentDrivers(Drivers, firstOrLast) {
    if (firstOrLast == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(Drivers);
    }
    else if (firstOrLast == returnLastTwoDrivers) {
        return returnLastTwoDrivers(Drivers);
    }
};




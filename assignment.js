// Problem - 1
function kilometerToMeter(val) {
    return val * 1000;
}

// Problem - 2
function budgetCalculator(clock, mobile, laptop) {
    var clockPrice = 50 * clock;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;
    var total = clockPrice + mobilePrice + laptopPrice;

    return total;
}

// Problem - 3
function hotelCost(days) {
    var x = 100;
    var y = 80;
    var z = 50;
    if (days <= 10) {
        return days * x;
    } else if (days <= 20) {
        var temp = (days - 10) * y;
        return temp + (10 * x)
    } else {
        var temp = (days - 20) * z;
        return temp + (10 * x) + (10 * y);
    }
}

// Problem - 4
function megaFriend(friendsName) {
    var maxVal = 0;
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > maxVal) {
            maxVal = i;
        }
    }
    return maxVal;
}










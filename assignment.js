
// https://github.com/mhhasanmehedi/js_problem_solving

// Kilometer To Meter converter
function kilometerToMeter(Kilometer){
    var meter = Kilometer * 1000;
    return meter;
}


// Budge Calculator
function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + phonePrice + laptopPrice;
    return totalCost;
}


// Hotel Cost
function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}


// Mega Friend
function megaFriend(friends){
    var lgth = 0;
    var longest;
    for(var i = 0; i < friends.length; i++){
        if(friends[i].length > lgth){
            var lgth = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;
}





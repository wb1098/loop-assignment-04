var months = [{
    name: 'January',
    days: 31
}, {
    name: 'February',
    days: 28
}, {
    name: 'March',
    days: 31
}, {
    name: 'April',
    days: 30
}, {
    name: 'May',
    days: 31
}, {
    name: 'June',
    days: 30
}, {
    name: 'July',
    days: 31
}, {
    name: 'August',
    days: 31
}, {
    name: 'September',
    days: 30
}, {
    name: 'October',
    days: 31
}, {
    name: 'November',
    days: 30
}, {
    name: 'December',
    days: 31
}];

function printMonthAndDay(monthsArray) {
    var cnt = 1;
    for (var i = 0; i < monthsArray.length; i++) {

        for (var key in monthsArray[i]) {

            for (var j = 1; j <= monthsArray[i][key]; j++) {
                console.log(cnt, monthsArray[i].name + ' ' + j.toString());
                cnt++;
            }
        }
    }
}

//printMonthAndDay(months);


//2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).
function printSecondsInOne24HourDay() {
    var cnt = 1;
    for (var i = 0; i < 24; i++) {

        for (var j = 0; j < 60; j++) {

            for (var k = 0; k < 60; k++) {
                console.log(cnt, i + ':' + j + ':' + k);
                cnt++;
            }
        }
    }

}

//printSecondsInOne24HourDay();



//3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).
function printSecondsInOne12HourDay() {
    var amOrPm = '';
    var hr = '';

    for (var i = 1; i <= 24; i++) {
        if (i < 12) {
            amOrPm = 'AM';
            hr = displayTwoFixedPlaces(i).toString();

        } else if (i > 12) {
            hr = (i - 12).toString();
            amOrPm = 'PM';
        }

        for (var j = 1; j < 60; j++) {

            for (var k = 1; k < 60; k++) {
                console.log(hr + ':' + displayTwoFixedPlaces(j) + ':' + displayTwoFixedPlaces(k) + ' ' + amOrPm);
            }
        }

    }
}

function displayTwoFixedPlaces(num) {
    var result = '';
    if (num < 10) {
        result = '0' + num.toString();
    } else {
        result = num.toString();
    }
    return (result);
}

//printSecondsInOne12HourDay();

function getAge(inputDate) {
    dob = inputDate.split(/-/)
        // console.log(dob)
    let dateDob = parseInt(dob[0]);
    let monthDob = parseInt(dob[1]) - 1;
    let yearDob = parseInt(dob[2])

    let now = new Date();
    let dateNow = now.getDate();
    let monthNow = now.getMonth();
    let yearNow = now.getFullYear();
    // console.log(dateNow, monthNow, yearNow);

    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";


    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";


    if (age.years > 100) {
        ageString = "Oops! Could not calculate age!";
    } else if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + dayString + " old!";
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";

    return ageString;

}

function calculate() {
    let inputDate = document.querySelector('#datepicker').value;
    // console.log(typeof(inputDate))
    let ageStatement = getAge(inputDate)
        // console.log(ageStatement)
    if (ageStatement == "Oops! Could not calculate age!") {
        document.querySelector('.ageStatus').innerHTML = `${ageStatement}`
        document.querySelector('.result').style.display = 'block';
        document.querySelector('.result').style.color = '#D8000C';
        dycalendar.draw({
            target: '#styleCalendar',
        })
    } else if (ageStatement.substring(ageStatement.length - 16) == "Happy Birthday!!") {
        document.querySelector('.ageStatus').innerHTML = `You are ${ageStatement}`
        document.querySelector('.result').style.display = 'block';
        document.querySelector('.result').style.color = '#00529B';
        document.querySelector('#styleCalendar').innerHTML = `<img src = "img/Happy Birthday.png" class="img-thumbnail rounded" style="background-color: #EEEEEE; border: none;">`
    } else {
        document.querySelector('.ageStatus').innerHTML = `You are ${ageStatement}`
        document.querySelector('.result').style.display = 'block';
        document.querySelector('.result').style.color = '#4F8A10';

        dob = inputDate.split(/-/)
        let dateNext = parseInt(dob[0]);
        let monthNext = parseInt(dob[1]) - 1;
        let now = new Date()
        let yearNext = now.getFullYear();
        let monthDiff = monthNext - now.getMonth()
        if (monthDiff < 0) {
            yearNext += 1;
        }
        if (monthDiff == 0) {
            let dayDiff = dateNext - now.getDate();
            if (dayDiff < 0) {
                yearNext += 1
            }
        }
        dycalendar.draw({
            target: "#styleCalendar",
            year: yearNext,
            month: monthNext,
            date: dateNext
        })
    }
}

document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('.result').style.display = 'none';
    document.querySelector('#datepicker').value = "";
})

$(function() {
    $("#datepicker").datepicker({
        format: "dd-mm-yyyy",
        clearBtn: true,
        autoclose: true,
        endDate: '+0d',
    })
})
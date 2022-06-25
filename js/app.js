function calculate() {
    dycalendar.draw({
        target: '#styleCalendar',
        year: 1994,
        month: 10,
        date: 18
    })
}

$(function() {
    $("#datepicker").datepicker({
        format: "dd-mm-yyyy",
        clearBtn: true,
        autoclose: true,
        endDate: '+0d',
    })
})
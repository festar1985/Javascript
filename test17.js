calendar(2, 4, 2019);

function calendar(day, month, year) {
    let html;
    let row1 = "<table>";
    let row2 = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

    let date = new Date(year, month - 1, day);

    let firstDay = new Date(year, month - 1, 1).getDay();

    let lastDay = 32 - new Date(year, month - 1, 32).getDate();

    row3 = "<tr>"
    let startDate = 1;
    for (let j = 0; j < 7; j++) {

        if (j < firstDay) {
            let temp = "<td> </td>"
            row3 = row3 + temp;
        } else {
            row3 = row3 + "<td>" + startDate + "</td>";
            startDate++

        }
    }

    row4 = "<tr>"
    for (let j = 0; j < 7; j++) {
        row4 = row4 + "<td>" + startDate + "</td>";
        startDate++;
    }

    row5 = "<tr>"
    for (let j = 0; j < 7; j++) {
        row5 = row5 + "<td>" + startDate + "</td>";
        startDate++;
    }

    row6 = "<tr>"
    for (let j = 0; j < 7; j++) {
        row6 = row6 + "<td>" + startDate + "</td>";
        startDate++;
    }

    row7 = "<tr>"
    for (let j = 0; j < 7; j++) {
        if (startDate <= lastDay) {
            row7 = row7 + "<td>" + startDate + "</td>";
            startDate++
        } else {
            let temp = "<td> </td>"
            row7 = row7 + temp;
        }
    }

    row8 = "<tr>"
    for (let j = 0; j < 7; j++) {
        if (startDate <= lastDay) {
            row8 = row8 + "<td>" + startDate + "</td>";
            startDate++
        } else {
            let temp = "<td> </td>"
            row8 = row8 + temp;
        }
    }

    let row9 = "</table>";

    html = row1 + row2 + row3 + row4 + row5 + row6 + row7 + row8 + row9;

    return html;


}
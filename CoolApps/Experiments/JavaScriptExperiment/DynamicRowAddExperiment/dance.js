function addRow() {


    var table = document.getElementById("danceTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var celltypeOfDance = row.insertCell(0);
    var element1 = document.createElement("select");
    element1.type = "select";
    element1.name = "select" + rowCount;

    var option_1 = document.createElement("option");
    option_1.text = "Salsa";
    element1.add(option_1)

    var option_2 = document.createElement("option");
    option_2.text = "Tango";
    element1.add(option_2);

    var option_3 = document.createElement("option");
    option_3.text = "Bharatnatyam";
    element1.add(option_3);

    var option_4 = document.createElement("option");
    option_4.text = "Hip Hop";
    element1.add(option_4);

    var option_5 = document.createElement("option");
    option_5.text = "Ballet";
    element1.add(option_5);

    celltypeOfDance.appendChild(element1);

    var cellDay = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "textbox[]";
    cellDay.appendChild(element2);
}
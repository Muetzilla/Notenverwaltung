function calculateAverage() {
    var averageInput = document.getElementById("average");
    var idnumber;
    var inputVal;
    var inputValField;
    var inputGewichtung;
    var inputGewichtungFiled;
    var stringElementNoteId;
    var stringElementGewichtungId;
    var calculationAverageNote;
    var calculateAverageGewichtung;
    var inputs = document.getElementsByClassName("notenInput");
    for (var i = 0, length = inputs.length; i < length; i++) {
        idnumber = i + 1;
        stringElementNoteId = "inputNote" + idnumber;
        stringElementGewichtungId = "inputWert" + idnumber;
        inputValField = document.getElementById(stringElementNoteId);
        inputGewichtung = document.getElementById(stringElementGewichtungId);
        console.log(inputGewichtungFiled);
        console.log(inputGewichtung);
        console.log(inputVal);
        console.log(inputValField);
        if (inputVal > 6 || inputVal < 1) {
            inputValField.classList.remove("correctNoteInput");
            inputValField.className += " wrongNoteInput";
        } else {
            inputValField.classList.remove("wrongNoteInput");
            inputValField.className += " correctNoteInput";
            if (inputVal != "") {
                inputGewichtung = document.getElementById(stringElementGewichtungId).value;
                inputVal = document.getElementById(stringElementNoteId).value;
                calculationAverageNote += inputVal * (inputGewichtung / 100);
                calculateAverageGewichtung += inputGewichtung;
                console.log("Gewichtung: " + calculateAverageGewichtung);
                console.log("Note: " + calculationAverageNote);
            } else {

            }
        }
    }
    console.log(calculationAverageNote / calculateAverageGewichtung);
    averageInput.value = calculationAverageNote / calculateAverageGewichtung;



}
function addColum() {
    var notenDiv = document.getElementById("noten");
    notenDiv.append("New row");
}
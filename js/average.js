function calculateAverage() {
    var averageInput = document.getElementById("average");
    var idnumber = 0;
    var inputVal = 1;
    var inputValField;
    var inputGewichtung = 0;
    var inputGewichtungFiled;
    var stringElementNoteId = "";
    var stringElementGewichtungId = "";
    var calculationAverageNote = 0;
    var calculateAverageGewichtung = 0;
    var inputs = document.getElementsByClassName("notenInput");
    var averageResult = 0;
    var roundAHalfBox = document.getElementById("roundAHalf");
    for (var i = 0, length = inputs.length; i < length; i++) {
        idnumber = i + 1;
        stringElementNoteId = "inputNote" + idnumber;
        stringElementGewichtungId = "inputWert" + idnumber;
        inputValField = document.getElementById(stringElementNoteId);
        inputGewichtungFiled = document.getElementById(stringElementGewichtungId);
      //  console.log(inputGewichtungFiled);
      //  console.log(inputValField);
     // inputVal = document.getElementById(stringElementNoteId).value;
        if (inputVal > 6 || inputVal < 1) {
            inputValField.classList.remove("correctNoteInput");
            inputValField.className += " wrongNoteInput";
        } else {
            inputValField.classList.remove("wrongNoteInput");
            inputValField.className += " correctNoteInput";
            if (inputVal != "") {
                inputGewichtung = document.getElementById(stringElementGewichtungId).value;
                inputVal = document.getElementById(stringElementNoteId).value;
                inputGewichtung /= 100;
                console.log("Eingabe Gewichtung: " + inputGewichtung);
                console.log("Eingabe Note: " + inputVal);
                calculationAverageNote += (inputVal * inputGewichtung);
                calculateAverageGewichtung += inputGewichtung;
                console.log("Gewichtung Berechnung: " + calculateAverageGewichtung);
                console.log("Note Berechnung: " + calculationAverageNote);
            } else {

            }
          
        }
    }
    averageResult = calculationAverageNote / calculateAverageGewichtung;
    console.log("Durchschnitt: " + averageResult);
    console.log("Durchschnitt formatiert: " + averageResult.toFixed(2));
    if(document.getElementById("roundAHalf").checked){
       averageResult = Math.round(averageResult * 2) / 2;
    }
    averageInput.value = averageResult.toFixed(2);



}
function addColum() {
    var notenDiv = document.getElementById("noten");
    var inputs = document.getElementsByClassName("notenInput");
    var amountInputFileds = inputs.length + 1;
    notenDiv.innerHTML += '<div class="row notenInput"><div class="col-md-6"><input class="form-control" type="number" id="inputNote'+amountInputFileds + '"placeholder="Note..."></div><div class="col-md-5"><input class="form-control" type="number" id="inputWert'+amountInputFileds+'" value="100"></div></div>';
}
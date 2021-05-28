function calculateAverage() {
    var averageInput = document.getElementById("average");
    var idnumber;
    var inputVal;
    var inputValField;
    var inputGewichtung;
    var inputGewichtungFiled;
    var stringElementNoteId;
    var stringElementGewichtungId;
    var inputs = document.getElementsByClassName("notenInput");
    for(var i = 0, length = inputs.length; i < length; i++){
        idnumber = i + 1;
        stringElementNoteId = "inputNote" + idnumber;
        stringElementGewichtungId = "inputWert" + idnumber;
        inputVal = document.getElementById(stringElementNoteId).value;
        inputValField = document.getElementById(stringElementNoteId);
        inputGewichtung = document.getElementById(stringElementGewichtungId).value;
        inputGewichtung = document.getElementById(stringElementGewichtungId);
        console.log(inputGewichtungFiled);
        console.log(inputGewichtung);
        console.log(inputVal);
        console.log(inputValField);
        if (inputVal > 6 || inputVal < 1) {
            inputValField.classList.remove("correctNoteInput"); 
            inputValField.className += " wrongNoteInput";
        } else {
            averageInput.value = inputVal;
            inputValField.classList.remove("wrongNoteInput"); 
            inputValField.className += " correctNoteInput";
            if (inputVal != "") {
               
            } else {
                
            }
        }
    }
   

}
function addColum() {
    var notenDiv = document.getElementById("noten");
    notenDiv.append("New row");
}
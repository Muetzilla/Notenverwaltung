function calculateAverage() {
    var averageInput = document.getElementById("average");
    var idnumber = 1;
    var inputVal = document.getElementById("inputNote" + idnumber).value;
    var inputValField = document.getElementById("inputNote1");

    if (inputVal == "") {
        averageInput.value = "NaN";
        console.log("NaN");
    } else {
        if (inputVal > 6 || inputVal < 1) {
            inputValField.classList.remove("correctNoteInput"); 
            inputValField.className += " wrongNoteInput";
        } else {
            averageInput.value = inputVal;
            inputValField.classList.remove("wrongNoteInput"); 
            inputValField.className += " correctNoteInput";

        }
    }

}
function addColum() {
    var notenDiv = document.getElementById("noten");
    notenDiv.append("New row");
}
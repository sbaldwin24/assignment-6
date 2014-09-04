document.getElementById("update-button").onclick = function() {
    var thimbles = document.getElementById("thimbles").value;
        swords = document.getElementById("swords").value;

    Number(thimbles);
    Number(swords);

    var totalCost = (thimbles * 1) + (swords * 37);
    function confirmation() {
    var answer = confirm("Are you positive this goose is legit?")
        if (answer){
            alert("You must have voted for Obama... your total will be " + totalCost + " monies");
            }
        else {
            alert("Smart choice!")
            }
        }
document.getElementById("the-total").textContent = confirmation();
}

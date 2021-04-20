/*
    General Background
    * This file changes the overall background color
    based on the day of the week
    * Works on rainbow colors of ROYGBIV

    Called at header of ALL files in  in ./me/..
*/
function changeBackgroundColor() {
    var dayOfWeek = new Date().getDay(); // Get day of week
    let color;

    // Sets color based off DoW
    if (dayOfWeek === 0) {
        color = "red"
    } else if (dayOfWeek === 1) {
        color = "orange"
    } else if (dayOfWeek === 2) {
        color = "yellow"
    } else if (dayOfWeek === 3) {
        color = "green"
    } else if (dayOfWeek === 4) {
        color = "blue"
    } else if (dayOfWeek === 5) {
        color = "purple"
    } else {
        color = "white"
    }

    document.body.style.background = color
}

changeBackgroundColor() // call func above
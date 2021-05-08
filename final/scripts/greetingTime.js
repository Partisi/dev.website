// Greeting Time
function changeTimeGreeting() { // Changes the greeting based on the time
    let nowHour = new Date().getHours() // get hours
    let greetingMsg = ""
    let color = ""
    if (nowHour >= 5 && nowHour < 11) { // based on time
        greetingMsg = "Good Morning"
        color = "orange"
    } else if (nowHour >= 11 && nowHour < 18) {
        greetingMsg = "Good Afternoon!"
        color = "blue"
    } else if (nowHour >= 18 && nowHour < 23) {
        greetingMsg = "Good Evening!"
        color = "darkblue"
    } else {
        greetingMsg = "Good Late Evening!"
        color = "gold"
    }
    return { textContent: greetingMsg, color: color }
}

const greetingInfoDoc = document.getElementById('greeting-info')
const returnObjGreeting = changeTimeGreeting()
greetingInfoDoc.textContent = returnObjGreeting.textContent
greetingInfoDoc.style.color = returnObjGreeting.color

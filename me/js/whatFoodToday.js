/*
    What Food Today?
    * This file detects the current day of the week
    and then outputs a corresponding food to be displayed
    based on that very day.
    * In addition to the day of the week, there is a
    recommended drink based on the time of day.

    Called at line 107 in ./me/food.html
*/

// Begin Initialization
const foodWithDays = [ // List of Objs w/ Food based on day
    { day: "Sunday", food: "Burger" },
    { day: "Monday", food: "Pizza" },
    { day: "Tuesday", food: "Tacos" },
    { day: "Wednesday", food: "Grilled Chicken" },
    { day: "Thursday", food: "Salmon" },
    { day: "Friday", food: "Chicken Wings" },
    { day: "Saturday", food: "Pasta" },
]
var nowDate = new Date(); // Get NOW
let associatedDayAndFood = foodWithDays[nowDate.getDay()] // gets appropiate obj in foodWithDays

// Setting Food of Day
function changeFoodOfDay() {
    let foodOfTheDay = document.getElementById('food-of-the-day');
    foodOfTheDay.textContent = associatedDayAndFood.food
}
changeFoodOfDay()

// Setting Day of Week
function changeDayOfWeek() {
    let todayWeek = document.getElementById('today-week')
    todayWeek.textContent = associatedDayAndFood.day
}
changeDayOfWeek()

// Setting Drink of Time
function changeDrinkOfTime() {
    let timeDrink = document.getElementById('drink-of-time')
    let nowHour = nowDate.getHours() // gets hour time (i.e. 1,2,3...24)
    let recommendedDrink = ""
    if (nowHour >= 4 && nowHour < 11) { // conditional based on hour time
        recommendedDrink = "cup of coffee to wake you up!"
    } else if (nowHour >= 11 && nowHour < 16) {
        recommendedDrink = "cup of water to stay hydrated!"
    } else if (nowHour >= 16 && nowHour < 21) {
        recommendedDrink = "can of soda to relax!"
    } else {
        recommendedDrink = "glass of whiske...I mean uhhhhh...applejuice...?"
    }
    timeDrink.textContent = recommendedDrink
}
changeDrinkOfTime()

// Handle the Food Name being clicked
function handleFoodClicked() {
    let foodAttitude = document.getElementsByClassName('food-attitude')[0]
    const yumSigns = [
        "YUM!",
        "SUPER YUMM!!!!",
        "YUM YUM YUMMMMY!",
        "YUMMASTERRR!!!",
    ]
    foodAttitude.textContent = yumSigns[Math.floor(yumSigns.length * Math.random())]
}
document.getElementById('food-of-the-day').onclick = () => handleFoodClicked()

// Handles the styling of the yummy being clicked for randomish styling
function handleYummyClick() {
    let rando = Math.floor(Math.random() * (5)) + 1;
    let style;
    if (rando === 1) {
        style = 'text-align: left; color: red; font-size: 16px'
    } else if (rando === 2) {
        style = 'text-align: left; color: orange; font-size: 18px'
    } else if (rando === 3) {
        style = 'text-align: right; color: purple; font-size: 28px'
    } else if (rando === 4) {
        style = 'text-align: right; color: green; font-size: 32px'
    } else if (rando === 5) {
        style = 'text-align: center; color: yellow; font-size: 24px'
    }
    document.getElementsByClassName('food-attitude')[0].style = style
}
function eachFoodAttitude() {
    let foodAtts = document.getElementsByClassName('food-attitude')
    for (let index = 0; index < foodAtts.length; index++) {
        const element = foodAtts[index];
        element.onclick = () => handleYummyClick()
    }
}

eachFoodAttitude()
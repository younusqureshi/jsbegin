let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
function save() {
    let demo = count + "-"
    saveEl.innerText += demo
    console.log(count)
}

//string concatenation //
let name = "I am Mohammed Younus Qureshi"
let greeting = "Assalamualikum Khairiyat"
let myGreeting = greeting + ", " + name
console.log(myGreeting)

//string and numbers combination//
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
//Render the welcome message using welcomeEl.innerText
let welcomeEl = document.getElementById("welcome-el")
let name1 = "Younus Qureshi"
let greeting1 = "Welcome to my website"
welcomeEl.innerText = greeting1 + ", " + name1
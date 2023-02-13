//initialize button with DOM
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById('save-el')
console.log(countEl)
//initialize a variable to hold the count
let count = 0;

 const increment = () => {
    count += 1
    countEl.textContent = count
    console.log(count)
 }
increment()

function save () {
    let savedCount = count + " - "
    saveEl.innerText += savedCount
    //resets the people entered to 0 every time you hit save
    countEl.textContent = 0
    //helps start the new count at 0
    count = 0
console.log(count) 
}
save()


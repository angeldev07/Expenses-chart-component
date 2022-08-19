// Data
import data from './data.json' assert{type: 'json'}
// Bars,days and amount elements
const bars = [...document.querySelectorAll(".bar")]
const days = [...document.querySelectorAll(".day")]
const amounts = [...document.querySelectorAll(".amount")]
// Get current day
const currentDay = new Date().toDateString().split(" ")[0].toLocaleLowerCase()
// Chart container
const chartContainer = document.querySelector(".chart-container")

chartContainer.style.height = `${data.reduce((total, item) => total+item.amount,0)}px`

function barPercentage(amount,height = 250) {
   return ((amount*100)/(height))
}

bars.forEach((bar,i)=> {
    bar.style.height = `${barPercentage(data[i].amount, chartContainer.clientHeight)*3}%`
    amounts[i].innerHTML = `$${data[i].amount}`
    if(days[i].textContent == currentDay) bar.classList.add('currentDay')
})
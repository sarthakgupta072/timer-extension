const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const timerElement = document.getElementById("timer")


function updateTimeElement() {
    chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `The timer is at ${time} seconds`
    })
    
    const currentTime = new Date().toLocaleTimeString()
    timeElement.textContent = `The time is: ${currentTime}`
}
updateTimeElement()
setInterval(updateTimeElement, 1000)



chrome.storage.sync.get(["name"], (res)=> {
    nameElement.textContent = `Your name is ${res.name}`
})


const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

startBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true,
    })
})

stopBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false,
    })
})

resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false,
        timer: 0
    })
})
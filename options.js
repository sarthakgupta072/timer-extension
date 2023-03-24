const nameInput = document.getElementById("name-input")
const timeInput = document.getElementById("time-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", ()=> {
    const name = nameInput.value
    const notifyTime = timeInput.value
    chrome.storage.sync.set({
        name,
        notifyTime
    }, ()=> {
            console.log(`Name is set to ${name}`)
            console.log(`Notify time is set to ${notifyTime}`)
        }
    )
})

chrome.storage.sync.get(["name", "notifyTime"], (result)=> {
    nameInput.value = result.name ?? "???"
    timeInput.value = result.notifyTime ?? 1000
})


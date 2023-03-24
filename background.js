chrome.alarms.create({
    periodInMinutes: 1 / 60
})

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer", "isRunning"], (res) => {
        const time = res.timer ?? 0
        const isRunning = res.isRunning ?? false
        if(!isRunning) {
            return
        }
        chrome.storage.local.set({
            timer: time + 1,
        })
        chrome.action.setBadgeText({
            text: `${time + 1}`
        }
        )
        
        chrome.storage.sync.get(["notifyTime"]).then((result) => {
            console.log(result.notifyTime)
            if(time % result.notifyTime == 0) {
            this.registration.showNotification("Chrome Timer Extension", {
            body: `${result.notifyTime} seconds has passed`,
            icon: "icon.png"
        })
        }
        })
        
        
    })
})

console.log(this)
const FinalTime = Date.UTC(2022, 09, 21, 19, 0, 0)/1000

const Now = Math.trunc(Date.now()/1000)

let TimeLeft = FinalTime - Now

const h1 = document.getElementById("CountDown")

const button = document.querySelector("button")

const audio = document.querySelector("audio")

const FormatTimeRemaining = (seconds) => {

    if (seconds <= 0) {
        return [0, 0, 0]
    }

    const Hours = Math.trunc(seconds/3600)
    const Minutes = Math.trunc((seconds%3600)/60)
    const Seconds = (seconds%3600)%60

    TimeLeft--

    return [Hours, Minutes, Seconds]
}

const RenderTime = () => {
    const time = FormatTimeRemaining(TimeLeft)

    h1.innerHTML = `${time[0].toString().padStart(2,"0")}:${time[1].toString().padStart(2,"0")}:${time[2].toString().padStart(2,"0")}`
}

const Interval = setInterval(RenderTime, 1000)

button.addEventListener('click', () => {
    audio.play()
    button.remove()
    h1.classList = []
})
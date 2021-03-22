// Countdown Hari Bahagia

function countdownHariBahagia() {
    let launchDate = new Date("April 9, 2021 10:00:00").getTime()
    let timer = setInterval(countdown, 1000)

    function countdown() {
        let now = new Date().getTime()
        let t = launchDate - now
        if (t > 0) {
            let days = Math.floor(t / (1000 * 60 * 60 * 24))
            if (days < 10) {
                days = "0" + days
            }

            let hours = Math.floor(
                (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            if (hours < 10) {
                hours = "0" + hours
            }

            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
            if (mins < 10) {
                mins = "0" + mins
            }

            let secs = Math.floor((t % (1000 * 60)) / 1000)
            if (secs < 10) {
                secs = "0" + secs
            }
            document.querySelector(".days span").innerText = days
            document.querySelector(".hours span").innerText = hours
            document.querySelector(".minutes span").innerText = mins
            document.querySelector(".seconds span").innerText = secs
        }
    }
}

countdownHariBahagia();

//audio

const audio = document.querySelector(".audio")
const audioBtn = document.querySelector(".audio-btn")
let count = 0

audio.volume = 0.3

function audioPlayPause() {
    if (count == 0) {
        count = 1
        audio.play()
    } else {
        count = 0
        audio.pause()
    }
}

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

countdownHariBahagia()

// Adding Prayers and Well Wishes

function addWellWishes() {
    const namaInput = document.querySelector(".nama-input")
    const commentInput = document.querySelector(".comment-input")
    const addCommentBtn = document.querySelector(".add-comment-btn")
    const addWishesComment = document.querySelector(".add-wishes-comment")

    //event listeners
    addCommentBtn.addEventListener("click", addComment)

    function addComment(event) {
        event.preventDefault()

        //add commentDiv
        const commentDiv = document.createElement("div")
        commentDiv.classList.add("comment-container")

        const newName = document.createElement("h4")
        newName.innerText = namaInput.value
        commentDiv.appendChild(newName)

        const newComment = document.createElement("p")
        newComment.innerText = commentInput.value
        commentDiv.appendChild(newComment)

        //append to addwishescomment
        addWishesComment.appendChild(commentDiv)

        //clear add comments input value
        namaInput.value = ""
        commentInput.value = ""
    }
}

addWellWishes()

//Firebase

// var firebaseConfig = {
//     apiKey: "AIzaSyCOs-b6GjL17VHcA_Te3pf1f-sZIVWcFN8",
//     authDomain: "wedding-invitation-wisam-asri.firebaseapp.com",
//     projectId: "wedding-invitation-wisam-asri",
//     storageBucket: "wedding-invitation-wisam-asri.appspot.com",
//     messagingSenderId: "321879059888",
//     appId: "1:321879059888:web:14a38de752f86004577a75",
// }
// firebase.initializeApp(firebaseConfig)


// function writeData(){
//     firebase.database().ref("Comment").set({
//         name: 
//     })
// }

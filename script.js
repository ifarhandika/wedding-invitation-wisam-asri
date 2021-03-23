//audio--------------------------------------------------------------------------

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

// Countdown Hari Bahagia---------------------------------------------------------

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

//Firebase---------------------------------------------------------------------

const addWishesComment = document.querySelector(".add-wishes-comment")
const addComment = document.querySelector("#add-comment")

//Getting documents
function renderComment(doc) {
    const commentDiv = document.createElement("div")
    const newName = document.createElement("h4")
    const newComment = document.createElement("p")

    commentDiv.setAttribute("data-id", doc.id)
    newName.textContent = doc.data().nama
    newComment.textContent = doc.data().comment

    commentDiv.classList.add("comment-container")

    commentDiv.appendChild(newName)
    commentDiv.appendChild(newComment)

    addWishesComment.appendChild(commentDiv)
}

//Saving Data

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

        db.collection("comments").add({
            nama: namaInput.value,
            comment: commentInput.value,
            createdAt: getCurrentTimestamp(),
        })
        //clear add comments input value
        namaInput.value = ""
        commentInput.value = ""
    }
}

addWellWishes()

//Getting data
db.collection("comments")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            renderComment(doc)
        })
    })

//Scroll Animation-------------------------------------------------------

//Opening
const openingText = document.querySelector(".opening-text")
const mempelai = document.querySelector(".mempelai")

window.addEventListener("scroll", openingTextAnimation)
window.addEventListener("scroll", mempelaiAnimation)

openingTextAnimation()
mempelaiAnimation()
function openingTextAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const openingTop = openingText.getBoundingClientRect().top
    if (openingTop < triggerBottom) {
        openingText.classList.add("show")
    }
}
function mempelaiAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const mempelaiTop = mempelai.getBoundingClientRect().top
    if (mempelaiTop < triggerBottom) {
        mempelai.classList.add("show")
    }
}

//Doa
const doaCard = document.querySelector(".card")

window.addEventListener("scroll", doaCardAnimation)

doaCardAnimation()
function doaCardAnimation() {
    const triggerBottom = window.innerHeight / 1
    const doaCardTop = doaCard.getBoundingClientRect().top
    if (doaCardTop < triggerBottom) {
        doaCard.classList.add("show")
    }
}

//Settings
const heroSetting = document.querySelector(".hero-setting")
const settingCard = document.querySelectorAll(".setting-card")

window.addEventListener("scroll", heroSettingAnimation)
window.addEventListener("scroll", settingCardAnimation)

heroSettingAnimation()
settingCardAnimation()
function heroSettingAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const heroSettingTop = heroSetting.getBoundingClientRect().top
    if (heroSettingTop < triggerBottom) {
        heroSetting.classList.add("show")
    }
}
function settingCardAnimation() {
    settingCard.forEach((card) => {
        const triggerBottom = window.innerHeight / 1.5
        const settingCardTop = card.getBoundingClientRect().top
        if (settingCardTop < triggerBottom) {
            card.classList.add("show")
        }
    })
}

//Hari bahagia

const hariBahagia = document.querySelector(".hari-bahagia-card")

window.addEventListener("scroll", hariBahagiaAnimation)

hariBahagiaAnimation()
function hariBahagiaAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const hariBahagiaTop = hariBahagia.getBoundingClientRect().top
    if (hariBahagiaTop < triggerBottom) {
        hariBahagia.classList.add("show")
    }
}

//Gallery

const galleryHero = document.querySelector(".gallery-hero")
const galleryContainer = document.querySelector(".gallery-container")

window.addEventListener("scroll", galleryHeroAnimation)
window.addEventListener("scroll", galleryContainerAnimation)

galleryHeroAnimation()
galleryContainerAnimation()
function galleryHeroAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const galleryHeroTop = galleryHero.getBoundingClientRect().top
    if (galleryHeroTop < triggerBottom) {
        galleryHero.classList.add("show")
    }
}
function galleryContainerAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const galleryContainerTop = galleryContainer.getBoundingClientRect().top
    if (galleryContainerTop < triggerBottom) {
        galleryContainer.classList.add("show")
    }
}

//Informasi

const informasi = document.querySelector(".informasi-card")

window.addEventListener("scroll", informasiAnimation)

informasiAnimation()
function informasiAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const informasiTop = informasi.getBoundingClientRect().top
    if (informasiTop < triggerBottom) {
        informasi.classList.add("show")
    }
}

//Best Wishes

const addWishesHero = document.querySelector(".add-wishes-hero")
const formWishesContainer = document.querySelector(".form-container")


window.addEventListener("scroll", addWishesHeroAnimation)
window.addEventListener("scroll", formWishesContainerAnimation)
window.addEventListener("scroll", addWishesCommentAnimation)

addWishesHeroAnimation()
formWishesContainerAnimation()
addWishesCommentAnimation()

function addWishesHeroAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const addWishesTop = addWishesHero.getBoundingClientRect().top
    if (addWishesTop < triggerBottom) {
        addWishesHero.classList.add("show")
    }
}
function formWishesContainerAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const formContainerTop = formWishesContainer.getBoundingClientRect().top
    if (formContainerTop < triggerBottom) {
        formWishesContainer.classList.add("show")
    }
}
function addWishesCommentAnimation() {
    const triggerBottom = window.innerHeight / 1.5
    const addWishesCommentTop = addWishesComment.getBoundingClientRect().top
    if (addWishesCommentTop < triggerBottom) {
        addWishesComment.classList.add("show")
    }
}
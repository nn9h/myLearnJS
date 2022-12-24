const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const pics = $$('.pic img')
const showBox = $('.box-show')
const showPic = $('.pic__show img')
const closeBtn = $('.cls')
const preBtn = $('.pre')
const folBtn = $('.fol')

let currIndex = 0

function show() {
    if (currIndex == 0) {
        preBtn.classList.add('hide')
    } else {
        preBtn.classList.remove('hide')
    }

    if (currIndex == pics.length - 1) {
        folBtn.classList.add('hide')
    } else {
        folBtn.classList.remove('hide')
    }

    showPic.src = pics[currIndex].src
    showBox.classList.add('show-pic')
}

pics.forEach((pic, i) => {
    pic.addEventListener('click', function () {
        currIndex = i
        show()
    })
});

closeBtn.addEventListener('click', function () {
    showBox.classList.remove('show-pic')
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
    showBox.classList.remove('show-pic')
    }
})

preBtn.addEventListener('click', function () {
    if (currIndex > 0) {
        currIndex--
        show()
    }
})

folBtn.addEventListener('click', function () {
    if (currIndex  < pics.length - 1) {
        currIndex++
        show()
    }
})

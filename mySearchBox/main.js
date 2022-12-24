const showBox = document.querySelector('.search-box')
const btn = document.querySelector('.search-btn')
const fosText = document.querySelector('.input-text')

btn.onclick = function () {
    showBox.classList.toggle('show')
    fosText.focus()
}


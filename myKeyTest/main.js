const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const epress = $('.press')
const ewrapper = $('.wrapper')
const ekey = $('.table.key p:last-child')
const eloc = $('.table.loc p:last-child')
const ewhi = $('.table.whi p:last-child')
const ecode = $('.table.code p:last-child')
const circle = $('.circle')

document.onkeydown = function (e) {
    ewrapper.classList.remove('hide')
    epress.classList.add('hide')

    circle.innerText = e.keyCode
    ekey.innerText = e.key
    eloc.innerText = e.location 
    ewhi.innerText = e.which
    ecode.innerText = e.code
}

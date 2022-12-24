const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const tabContents = $$('.tab-pane') 

tabs.forEach((tab, i) => {
    const content = tabContents[i]
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        this.classList.add('active')
        content.classList.add('active')

    }
});
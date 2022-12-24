const $ = document.querySelector.bind(document)

const openTable = $('.btn-open')
const table = $('.popup')
const iconCick = $('i')
const btnClick = $('.close-btn')

function closeTable(e) {
    table.classList.toggle('hide')
}

openTable.addEventListener('click', closeTable)
iconCick.addEventListener('click', closeTable)
btnClick.addEventListener('click', closeTable)
table.addEventListener('click', function (e) {
    if(e.target === e.currentTarget)
    closeTable()
})


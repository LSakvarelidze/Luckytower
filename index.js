// Creates DOM ELements

const gameBoard = [
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0},
    {one: 0, two: 0, thr: 0}
]

const container = document.querySelector('.container')
const levels = 10

for(var i=0; i<levels; i++) {
    const rows = document.createElement('div')
    rows.className = "row"
    container.appendChild(rows)
    for(var j=0; j<3; j++) {
        const buttons = document.createElement('div')
        buttons.className = "button"
        rows.appendChild(buttons)
    }
}

const start = document.createElement('div')
start.className = "start"
start.innerText = "START"
container.appendChild(start)

// There is game Engine

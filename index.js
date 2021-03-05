drawGame(0)
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', startGame)

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', resetGame)

// There is game Engine

function splitRows() {
    let winnerNumbers = [];
    for(var i=0; i<10; i++) {
        winnerNumbers.push(Math.floor(Math.random() * 3));
    }
    const rows = document.querySelectorAll('.rows');
    
    rows.forEach((row, index) => {
        const rowChild = winnerNumbers[index]
        const winningWindow = row.childNodes[rowChild]
        winningWindow.innerText = "💰"
    })
}

function cleanRows() {

    const rows = document.querySelectorAll('.rows');
    rows.forEach((row, index) => {
        row.childNodes[0].innerText = ""
        row.childNodes[1].innerText = ""
        row.childNodes[2].innerText = ""
    })

    gameStatus = 0
}

function startGame() {
    splitRows()
    startBtn.classList.add('hide')
    resetBtn.classList.remove('hide')
}

function resetGame() {
    cleanRows()
    startBtn.classList.remove('hide')
    resetBtn.classList.add('hide')
}


function drawGame() {

    // Creates DOM ELements
const container = document.querySelector('.container')
const levels = 10

for(var i=0; i<levels; i++) {
    const rows = document.createElement('div')
    rows.className = "rows"
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

const reset = document.createElement('div')
reset.className = "reset hide"
reset.innerText = "RESET"
container.appendChild(reset)

}
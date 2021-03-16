drawGame()
var selected;
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', startGameAfterTimer)

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', resetGame)

const timerP = document.getElementById('timerP')
// There is game Engine

function startGame() {
    let winnerNumbers = [];
    for(var i=0; i<10; i++) {
        winnerNumbers.push(Math.floor(Math.random() * 3));
    }
    const rows = document.querySelectorAll('.rows');
    var stats = 0;
    rows.forEach((row, index) => {
        const rowChild = winnerNumbers[index]
        const winningWindow = row.childNodes[rowChild]
        winningWindow.innerText = "💰"
        row.classList.add('disabled')

        if(winningWindow.className.includes('selected')) {
            stats++
        }
    })
    if(selected == stats) {
        timerP.innerText = "YOU WON!"
    } else {
        timerP.innerText = "YOU LOSE!"
    }
    startBtn.classList.add('hide')
    resetBtn.classList.remove('hide')
}

function resetGame() {
    const rows = document.querySelectorAll('.rows');
    rows.forEach((row, index) => {
        row.childNodes[0].innerText = ""
        row.childNodes[1].innerText = ""
        row.childNodes[2].innerText = ""
        row.childNodes[0].classList.remove('selected')
        row.childNodes[1].classList.remove('selected')
        row.childNodes[2].classList.remove('selected')
    })
    startBtn.classList.remove('hide')
    resetBtn.classList.add('hide')
    timerP.innerText = ''
}


function drawGame() {

    // Creates DOM ELements
const container = document.querySelector('.container')
const levels = 10

for(var i=0; i<levels; i++) {
    const mlt = [43544, 14963, 5142, 1767, 607, 208, 71, 24, 8, 2];
    const multi = document.createElement('div')
    multi.className = "multi"
    multi.innerHTML = "x" + mlt[i]
    container.appendChild(multi)

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

function startGameAfterTimer() {
    const rows = document.querySelectorAll('.rows'); 
    rows.forEach((row, index) => {
        row.classList.remove('disabled')
    })
    startBtn.classList.add('hide')
    selectLevel()
    var index = 5;
    function showNextLine() {
        // show line index
        index--;
        if (index > 0) {
        setTimeout(showNextLine, 1000);
        document.getElementById('timer').innerText = index
        } else if (index == 0) {
            document.getElementById('timer').innerText = "Over!"
            selected = document.querySelectorAll('.selected').length
            startGame()
        }
    }
    showNextLine()
}
function selectLevel() {
    const rows = document.querySelectorAll('.rows');
    rows.forEach((row, index) => {
        for(var startLevel = 9; startLevel >= 1; startLevel--) {
            windowSelect(row)
        }
    })
}

function windowSelect(x) {
    const buttons = x.querySelectorAll('.button')
    buttons[0].addEventListener('click', ()=> {
        buttons[0].classList.add('selected')
        buttons[1].classList.remove('selected')
        buttons[2].classList.remove('selected')
    })
    buttons[1].addEventListener('click', ()=> {
        buttons[1].classList.add('selected')
        buttons[0].classList.remove('selected')
        buttons[2].classList.remove('selected')
    })
    buttons[2].addEventListener('click', ()=> {
        buttons[2].classList.add('selected')
        buttons[0].classList.remove('selected')
        buttons[1].classList.remove('selected')
    })
}
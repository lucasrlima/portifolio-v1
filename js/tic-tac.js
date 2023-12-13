
const boardPosition = document.querySelectorAll('#board span')
let vBoard = []
let turnPlayer = ''

function getWinAreas() {
    const winAreas = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
      winAreas.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
      winAreas.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
      winAreas.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
      winAreas.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
      winAreas.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
      winAreas.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
      winAreas.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
      winAreas.push("0.2", "1.1", "2.0")
    return winAreas
}

function updateTitle () {
    const playerInput = document.getElementById('player1');
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function changeTitle() {
    const player1Name = document.getElementById('player1');
    const player2Name = document.getElementById('player2');
    
    if (turnPlayer === 'player1') {
        document.getElementById('turnPlayer').innerText = player1Name.value
    } 
    else document.getElementById('turnPlayer').innerText = player2Name.value
}

function initializeGame() {
    vBoard = [['', '', ''],['', '', ''],['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Your turn, <span id="turnPlayer"></span>'
    updateTitle()
    boardPosition.forEach (function(element) {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener ('click', handleBoardClick)
    })
    startBtn.innerText = 'Restart!'
    startBtn.classList.remove('win')
}

function disableClickArea(element) {
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function changePlayer(turnPlayer) {
    return turnPlayer === 'player1' ? 'player2' : 'player1';
}

function handleBoardClick(ev) {
    const position = ev.currentTarget.dataset.position
    const span = ev.currentTarget
    const rowColunmPair = position.split('.')
    const row = rowColunmPair[0]
    const colunm = rowColunmPair[1]
    
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row][colunm] = 'X'
    }

    else {
        span.innerText = 'O'
        vBoard[row][colunm] = 'O'
    }
    
    function handleWin(positions) {
        positions.forEach(function (position) {
            document.querySelector('[data-position="' + position + '"]').classList.add('win');
        });
        const playerName = document.getElementById(turnPlayer).value;
        document.querySelector('h2').innerHTML = playerName + ' venceu!';
        startBtn.innerText = 'Rematch!'
        startBtn.classList.add('win')
    }

    const winAreas = getWinAreas()
    if (winAreas.length > 0) {
        handleWin(winAreas)
    }

    else if (vBoard.flat().includes('')) {
        console.clear()
        console.table(vBoard)
        disableClickArea(span)
        turnPlayer = changePlayer(turnPlayer)
        changeTitle()
    }

    else {
        document.querySelector('h2').innerHTML = '<h1>TIE!</h1>'
        startBtn.innerText = 'Rematch!'
    }
}

const startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', initializeGame)

// variable keeps track of moves, true = X, false = O
let moveCounter = 0
let gameEnd = false
let winner = ''
// const grid = document.getElementById('grid')
const reset = document.getElementById('reset')
const topRow = document.querySelectorAll('.topRow')
const middleRow = document.querySelectorAll('.middleRow')
const bottomRow = document.querySelectorAll('.bottomRow')
const leftColumn = document.querySelectorAll('.leftColumn')
const middleColumn = document.querySelectorAll('.middleColumn')
const rightColumn = document.querySelectorAll('.rightColumn')
const lrDiagonal = document.querySelectorAll('.lrDiagonal')
const rlDiagonal = document.querySelectorAll('.rlDiagonal')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const playerOneMoves = []
const playerTwoMoves = []
const winOne = ['box-1', 'box-2', 'box-3']
const winTwo = ['box-4', 'box-5', 'box-6']
const winThree = ['box-7', 'box-8', 'box-9']
const winFour = ['box-1', 'box-4', 'box-7']
const winFive = ['box-2', 'box-5', 'box-8']
const winSix = ['box-3', 'box-6', 'box-9']
const winSeven = ['box-1', 'box-5', 'box-9']
const winEight = ['box-3', 'box-5', 'box-7']
const winConditions = [winOne, winTwo, winThree, winFour, winFive, winSix, winSeven, winEight]

const isInCombo = (array1, array2) => {
    const checkFor = (box) => {
        return array1.includes(box)
    }
    return array2.every(checkFor) 
}

const randomizeColors = () => {
    let randomR = Math.floor(Math.random() * 255)
    let randomG = Math.floor(Math.random() * 255)
    let randomB = Math.floor(Math.random() * 255)
    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    let complementaryColor = `rgb(${255 - randomR}, ${255 - randomG}, ${255 - randomB})`
    
    return [randomColor, complementaryColor]
}

let colors = randomizeColors()
title.style.textShadow = `2px 2px 15px ${colors[0]}`;
subtitle.style.textShadow = `2px 2px 15px ${colors[1]}`;
const boxes = document.querySelectorAll('.box')

const resetGrid = () => {
    colors = randomizeColors()
    title.style.textShadow = `2px 2px 15px ${colors[0]}`;
    subtitle.style.textShadow = `2px 2px 15px ${colors[1]}`;
    for (let i = 0; i < 9; i++){
        boxes[i].classList.remove('hasBeenClicked')
        boxes[i].style.backgroundColor = 'rgb(52, 52, 52)'
        playerOneMoves.pop()
        playerTwoMoves.pop()
    }
    moveCounter = 0
}

const makeMove = (event) => {
    const selected = event.target
    moveCounter++
    if (moveCounter % 2 !== 0 && moveCounter !== 9) {
        selected.style.backgroundColor = colors[0]
        selected.classList.add('hasBeenClicked')
        playerOneMoves.push(selected.id)
        console.log(playerOneMoves)
    } else if (moveCounter % 2 === 0) {
        selected.style.backgroundColor = colors[1]
        selected.classList.add('hasBeenClicked')
        playerTwoMoves.push(selected.id)
    } else if (moveCounter === 9) {
        selected.style.backgroundColor = colors[0]
        console.log('its a tie')
        playerOneMoves.push(selected.id)
    }
    checkWin()
}

const checkWin = () => {
    for(i = 0; i < winConditions.length; i++) {
        if (isInCombo(playerOneMoves, winConditions[i]) === true) {
            for (let i = 0; i < 9; i++){
                boxes[i].style.backgroundColor = colors[0]
            }
            gameOver()
            return console.log('Player One Wins!')
        } else if (isInCombo(playerTwoMoves, winConditions[i]) === true) {
            for (let i = 0; i < 9; i++){
                boxes[i].style.backgroundColor = colors[1]
            }
            gameOver()
            return console.log('Player Two Wins!')
        }
    }
}


// const checkWinCondition = () => {
//     if (topRow[0].classList.contains('red') && topRow[1].classList.contains('red') && topRow[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (middleRow[0].classList.contains('red') && middleRow[1].classList.contains('red') && middleRow[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (bottomRow[0].classList.contains('red') && bottomRow[1].classList.contains('red') && bottomRow[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (leftColumn[0].classList.contains('red') && leftColumn[1].classList.contains('red') && leftColumn[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (middleColumn[0].classList.contains('red') && middleColumn[1].classList.contains('red') && middleColumn[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (rightColumn[0].classList.contains('red') && rightColumn[1].classList.contains('red') && rightColumn[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (lrDiagonal[0].classList.contains('red') && lrDiagonal[1].classList.contains('red') && lrDiagonal[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (rlDiagonal[0].classList.contains('red') && rlDiagonal[1].classList.contains('red') && rlDiagonal[2].classList.contains('red')) {
//         winner = 'red'
//         gameOver()
//     } else if (topRow[0].classList.contains('blue') && topRow[1].classList.contains('blue') && topRow[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (middleRow[0].classList.contains('blue') && middleRow[1].classList.contains('blue') && middleRow[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (bottomRow[0].classList.contains('blue') && bottomRow[1].classList.contains('blue') && bottomRow[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (leftColumn[0].classList.contains('blue') && leftColumn[1].classList.contains('blue') && leftColumn[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (middleColumn[0].classList.contains('blue') && middleColumn[1].classList.contains('blue') && middleColumn[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (rightColumn[0].classList.contains('blue') && rightColumn[1].classList.contains('blue') && rightColumn[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (lrDiagonal[0].classList.contains('blue') && lrDiagonal[1].classList.contains('blue') && lrDiagonal[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     } else if (rlDiagonal[0].classList.contains('blue') && rlDiagonal[1].classList.contains('blue') && rlDiagonal[2].classList.contains('blue')) {
//         winner = 'blue'
//         gameOver()
//     }
// }

const gameOver = () => {
    for (let i = 0; i < 9; i++){
        boxes[i].classList.add('hasBeenClicked')
    }
}


for (let i = 0; i < 9; i++){
    boxes[i].addEventListener('click', makeMove)
}

reset.addEventListener('click', resetGrid)

document.addEventListener('DOMContentLoaded', () => {
    randomizeColors()
})


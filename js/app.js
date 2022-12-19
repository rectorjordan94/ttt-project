let moveCounter = 0
let gameEnd = false
let winner = ''
const reset = document.getElementById('reset')
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
const boxes = document.querySelectorAll('.box')

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
title.style.textShadow = `2px 2px 10px ${colors[0]}`;
subtitle.style.textShadow = `2px 2px 10px ${colors[1]}`;


const resetGrid = () => {
    colors = randomizeColors()
    title.style.textShadow = `2px 2px 10px ${colors[0]}`;
    subtitle.style.textShadow = `2px 2px 10px ${colors[1]}`;
    for (let i = 0; i < 9; i++){
        boxes[i].classList.remove('hasBeenClicked')
        boxes[i].style.background = `radial-gradient(circle at 150px 150px, rgb(255,255,255), rgb(0,0,0))`
        boxes[i].style.transform = ''
        boxes[i].innerHTML = ''
        boxes[i].style.opacity = 1
        playerOneMoves.pop()
        playerTwoMoves.pop()
    }
    moveCounter = 0
}

const makeMove = (event) => {
    const selected = event.target
    moveCounter++
    if (moveCounter % 2 !== 0 && moveCounter !== 9) {
        selected.style.background = `radial-gradient(circle at 150px 150px, ${colors[0]}, rgb(0,0,0))`
        selected.classList.add('hasBeenClicked')
        playerOneMoves.push(selected.id)
    } else if (moveCounter % 2 === 0) {
        selected.style.background = `radial-gradient(circle at 150px 150px, ${colors[1]}, rgb(0,0,0))`
        selected.classList.add('hasBeenClicked')
        playerTwoMoves.push(selected.id)
    } else if (moveCounter === 9) {
        selected.style.background = `radial-gradient(circle at 150px 150px, ${colors[0]}, rgb(0,0,0))`
        playerOneMoves.push(selected.id)
        for (let i = 0; i < 9; i++){
            const middle = boxes[4]
            if (i % 2 === 0) {
                boxes[i].style.background = `radial-gradient(circle at 150px 150px, ${colors[0]}, rgb(0,0,0))`
            } else {
                boxes[i].style.background = `radial-gradient(circle at 150px 150px, ${colors[1]}, rgb(0,0,0))`
            }
            if (boxes[i].id === 'box-5') {
                middle.style.transform = 'scale(3, 3)'
                middle.innerHTML = 'TIE'
            } else {
                boxes[i].style.opacity = '0'
            }
        }
    }
    checkWin()
}

const checkWin = () => {
    for(i = 0; i < winConditions.length; i++) {
        if (isInCombo(playerOneMoves, winConditions[i]) === true) {
            for (let i = 0; i < 9; i++){
                boxes[i].style.background = `radial-gradient(circle at 150px 150px, ${colors[0]}, rgb(0,0,0))`
                const middle = boxes[4]
                if (boxes[i].id === 'box-5') {
                    middle.style.transform = 'scale(3, 3)'
                    middle.innerHTML = 'PLAYER ONE WINS'
                } else {
                    boxes[i].style.opacity = '0'
                }
            }
            gameOver()
        } else if (isInCombo(playerTwoMoves, winConditions[i]) === true) {
            for (let i = 0; i < 9; i++){
                boxes[i].style.background = `radial-gradient(circle at 150px 150px, ${colors[1]}, rgb(0,0,0))`
                const middle = boxes[4]
                if (boxes[i].id === 'box-5') {
                    middle.style.transform = 'scale(3, 3)'
                    middle.innerHTML = 'PLAYER TWO WINS'
                } else {
                    boxes[i].style.opacity = '0'
                }
                
            }
            gameOver()
        }
    }
}

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


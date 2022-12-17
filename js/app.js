// variable keeps track of moves, true = X, false = O
let xMove = true
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


// const topLeft = document.getElementById('topLeft')
// const topMiddle = document.getElementById('topMiddle')
// const topRight = document.getElementById('topRight')
// const middleLeft = document.getElementById('middleLeft')
// const middleMiddle = document.getElementById('middleMiddle')
// const middleRight = document.getElementById('middleRight')
// const bottomLeft = document.getElementById('bottomLeft')
// const bottomMiddle = document.getElementById('bottomMiddle')
// const bottomRight = document.getElementById('bottomRight')
// grabs all of the boxes in the grid
const boxes = document.querySelectorAll('.box')

const makeMove = (event) => {
    const selected = event.target
    if (xMove) {
        selected.style.backgroundColor = 'red'
        selected.classList.add('hasBeenClicked', 'red')
        xMove = false
        console.log(selected.className)
        console.log(`xMove = ${xMove}`)
        checkWinCondition()
    } else if (!xMove) {
        selected.style.backgroundColor = 'blue'
        selected.classList.add('hasBeenClicked', 'blue')
        xMove = true
        console.log(selected.className)
        console.log(`xMove = ${xMove}`)
        checkWinCondition()
    } 
}

const checkWinCondition = () => {
    if (topRow[0].classList.contains('red') && topRow[1].classList.contains('red') && topRow[2].classList.contains('red')) {
        console.log('you win')
        gameOver()
    } else if (middleRow[0].classList.contains('red') && middleRow[1].classList.contains('red') && middleRow[2].classList.contains('red')) {
        console.log('you win')
    } else if (bottomRow[0].classList.contains('red') && bottomRow[1].classList.contains('red') && bottomRow[2].classList.contains('red')) {
        console.log('you win')
    } else if (leftColumn[0].classList.contains('red') && leftColumn[1].classList.contains('red') && leftColumn[2].classList.contains('red')) {
        console.log('you win')
    } else if (middleColumn[0].classList.contains('red') && middleColumn[1].classList.contains('red') && middleColumn[2].classList.contains('red')) {
        console.log('you win')
    } else if (rightColumn[0].classList.contains('red') && rightColumn[1].classList.contains('red') && rightColumn[2].classList.contains('red')) {
        console.log('you win')
    } else if (lrDiagonal[0].classList.contains('red') && lrDiagonal[1].classList.contains('red') && lrDiagonal[2].classList.contains('red')) {
        console.log('you win')
    } else if (rlDiagonal[0].classList.contains('red') && rlDiagonal[1].classList.contains('red') && rlDiagonal[2].classList.contains('red')) {
        console.log('you win')
    } else if (topRow[0].classList.contains('blue') && topRow[1].classList.contains('blue') && topRow[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (middleRow[0].classList.contains('blue') && middleRow[1].classList.contains('blue') && middleRow[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (bottomRow[0].classList.contains('blue') && bottomRow[1].classList.contains('blue') && bottomRow[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (leftColumn[0].classList.contains('blue') && leftColumn[1].classList.contains('blue') && leftColumn[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (middleColumn[0].classList.contains('blue') && middleColumn[1].classList.contains('blue') && middleColumn[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (rightColumn[0].classList.contains('blue') && rightColumn[1].classList.contains('blue') && rightColumn[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (lrDiagonal[0].classList.contains('blue') && lrDiagonal[1].classList.contains('blue') && lrDiagonal[2].classList.contains('blue')) {
        console.log('you lose')
    } else if (rlDiagonal[0].classList.contains('blue') && rlDiagonal[1].classList.contains('blue') && rlDiagonal[2].classList.contains('blue')) {
        console.log('you lose')
    }
}


// const checkLoseCondition = () => {
//     if (topRow[0].classList.contains('blue') && topRow[1].classList.contains('blue') && topRow[2].classList.contains('blue')) {
//         console.log('you lose')
//     } else if (middleRow[0].classList.contains('blue') && middleRow[1].classList.contains('blue') && middleRow[2].classList.contains('blue')) {
//         console.log('you lose')
//     } else if (bottomRow[0].classList.contains('blue') && bottomRow[1].classList.contains('blue') && bottomRow[2].classList.contains('blue')) {
//         console.log('you lose')
//     }
// }

const gameOver = () => {
    // you should not be able to click remaining empty cells after the game is over
    // iterate over grid and disable pointer events for all cells
    for (let i = 0; i < 9; i++){
        boxes[i].classList.add('hasBeenClicked')
    }
    // const gameOver = document.createElement('div')
    // gameOver.innerText = 'Game Over'
    // document.body.appendChild(gameOver)
}

// const containsRed = (element) => {
//     if (element.classList.contains('red')) {
//         return
//     }
// }


for (let i = 0; i < 9; i++){
    boxes[i].addEventListener('click', makeMove)
}

// determine 3 in a row
// access background color of 3 divs within a row

// for (let i = 0; i < 3; i++){
//     if (topRow[i].classList.contains('red')) {
//         console.log('you win')
//     }
// }

// console.log(topRow)

// const move = document.querySelectorAll('.box')
// const game = document.querySelector('#game')
// const playableBoxes = document.querySelectorAll('.box')
// const playerOneMarker = 'pink'
// const playerTwoMarker = 'green'
// const playerOneMoves = []
// const playerTwoMoves = []
// let moveCounter = 0
// const winOne = ['box-1', 'box-2', 'box-3']
// const winTwo = ['box-4', 'box-5', 'box-6']
// const winThree = ['box-7', 'box-8', 'box-9']
// const winFour = ['box-1', 'box-4', 'box-7']
// const winFive = ['box-2', 'box-5', 'box-8']
// const winSix = ['box-3', 'box-6', 'box-9']
// const winSeven = ['box-1', 'box-5', 'box-9']
// const winEight = ['box-3', 'box-5', 'box-7']
// const winConditions = [winOne, winTwo, winThree, winFour, winFive, winSix, winSeven, winEight]

// // put win conditions in an array and then loop over the array using the is in combo in check win.
// const isInCombo = (array1, array2) => {
//     const checkFor = (box) => {
//         return array1.includes(box)
//     }
//     return array2.every(checkFor) 
// }
// // const isSubset = (array1, array2) =>
// //     array2.every((element) => array1.includes(element));

// // console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// // console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


// // const switchPlayer = () =>

// const makeMove = (event) => {
//     // add player1 class to the box
//     // move[i].classList.add('player1')

//     moveCounter++
//     if (moveCounter % 2 === 0) {
//         event.target.style.backgroundColor = playerTwoMarker
//         event.target.classList.add('played')
//         playerTwoMoves.push(event.target.id)
//     } else {
//         event.target.style.backgroundColor = playerOneMarker
//         event.target.classList.add('played')
//         playerOneMoves.push(event.target.id)
//     }
//     checkWin()
// }

// // Researched array includes method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// const checkWin = () => {
//     for(i = 0; i < winConditions.length; i++) {
//         if(isInCombo(playerOneMoves, winConditions[i]) === true) {
//             return console.log('Player One Wins!')
//         } else if (isInCombo(playerTwoMoves, winConditions[i]) === true) {
//             return console.log('Player Two Wins!')
//         }
//     }
// }
//     // if (playerOneMoves.includes('box-1') && playerOneMoves.includes('box-2') && playerOneMoves.includes('box-3')){
//     //     console.log('player one wins!')
//     // } else if (playerOneMoves.includes('box-4'))
//     // }




// // To understand how to use contains method: https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

// const checkPlayed = () => {
//     for (let i = 0; i < move.length; i++) {
//         move[i].addEventListener('click', makeMove)
//     }
// }
// // can add "once" after makeMove and the box can only be selected once - right now, have it in the style as a pointer-event.

// checkPlayed()
// // move.addEventListener('click', makeMove)
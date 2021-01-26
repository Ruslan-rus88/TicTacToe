var cells = document.getElementsByClassName('cell')
let res = document.getElementById('Result')
let menu = document.getElementById('menu')
let game = document.getElementById('game')
let counter = document.getElementById('counter')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

function endStyle(player, a, b, c){
    menu.setAttribute('style','background-color: #F07427;')
    res.innerHTML = player + '<br>has won!'
    player1.setAttribute('style','background-color: none') // ends with player 1 not Active
    player2.setAttribute('style','background-color: none') // ends with player 2 not Active
    a.setAttribute('style','color: green')
    b.setAttribute('style','color: green')
    c.setAttribute('style','color: green')

    // stop the clicking process if game has ended
    for (w=0; w<cells.length; w++){
        cells[w].removeAttribute('onclick') 
    }
}

function startStyle(){
    menu.setAttribute('style','background-color: #001B2F;')
    res.innerHTML = '' // clear result space
    player1.setAttribute('style','background-color: green') // starts with player 1 Active
    player2.setAttribute('style','background-color: none') // starts with player 2 not Active
    for (i=0; i<cells.length; i++){ cells[i].setAttribute('style','color: #EB4C42')}
}

function draw() {
    menu.setAttribute('style','background-color: #252526;')
    res.innerHTML = 'DRAW!'
    player1.setAttribute('style','background-color: none') // ends with player 1 not Active
    player2.setAttribute('style','background-color: none') // ends with player 2 not Active

    // stop the clicking process if game has ended
    for (w=0; w<cells.length; w++){
        cells[w].removeAttribute('onclick') 
    }
}

let step = 1
let player =''
function cellClicked(a){
    counter.innerHTML = step
    if (step%2 != 0) {
        a.innerHTML = 'X';
        player = 'Player 1';
        player1.setAttribute('style','background-color: none')
        player2.setAttribute('style','background-color: green')
        endGame(player)
    }
    else  {
        a.innerHTML = 'O';
        player = 'Player 2';
        player2.setAttribute('style','background-color: none')
        player1.setAttribute('style','background-color: green')
        endGame(player)
    }
    step ++
    console.log(player)
    a.removeAttribute('onclick')  //  to prevent press again
}

function newGame(){
    startStyle() // choose start style
    for (i=0; i<9; i++) { cells[i].innerHTML = '' } // clear cells at the begining of game
    step = 1
    counter.innerHTML = 0

    cells[0].setAttribute('onclick','cellClicked(cells[0])')
    cells[1].setAttribute('onclick','cellClicked(cells[1])')
    cells[2].setAttribute('onclick','cellClicked(cells[2])')
    cells[3].setAttribute('onclick','cellClicked(cells[3])')
    cells[4].setAttribute('onclick','cellClicked(cells[4])')
    cells[5].setAttribute('onclick','cellClicked(cells[5])')
    cells[6].setAttribute('onclick','cellClicked(cells[6])')
    cells[7].setAttribute('onclick','cellClicked(cells[7])')
    cells[8].setAttribute('onclick','cellClicked(cells[8])')

}

function endGame(player){

    let x0 = cells[0].innerHTML,
        x1 = cells[1].innerHTML,
        x2 = cells[2].innerHTML,
        x3 = cells[3].innerHTML,
        x4 = cells[4].innerHTML,
        x5 = cells[5].innerHTML,
        x6 = cells[6].innerHTML,
        x7 = cells[7].innerHTML,
        x8 = cells[8].innerHTML

    if      (x0 == x1 && x1 == x2 && x1 !='') {endStyle(player, cells[0], cells[1], cells[2])}
    else if (x3 == x4 && x4 == x5 && x4 !='') {endStyle(player, cells[3], cells[4], cells[5])}
    else if (x6 == x7 && x7 == x8 && x7 !='') {endStyle(player, cells[6], cells[7], cells[8])}
    else if (x0 == x3 && x3 == x6 && x3 !='') {endStyle(player, cells[0], cells[3], cells[6])}
    else if (x1 == x4 && x4 == x7 && x4 !='') {endStyle(player, cells[1], cells[4], cells[7])}
    else if (x2 == x5 && x5 == x8 && x5 !='') {endStyle(player, cells[2], cells[5], cells[8])}
    else if (x0 == x4 && x4 == x8 && x4 !='') {endStyle(player, cells[0], cells[4], cells[8])}
    else if (x2 == x4 && x4 == x6 && x4 !='') {endStyle(player, cells[2], cells[4], cells[6])}
    else if (x0 !='' && x1 !='' && x2 !='' && x3 !='' && x4 !='' && x5 !='' && x6 !='' && x7 !='' && x8 !=''){draw()}
}

/*
function endGame(player){

    let x0 = cells[0].innerHTML,
        x1 = cells[1].innerHTML,
        x2 = cells[2].innerHTML,
        x3 = cells[3].innerHTML,
        x4 = cells[4].innerHTML,
        x5 = cells[5].innerHTML,
        x6 = cells[6].innerHTML,
        x7 = cells[7].innerHTML,
        x8 = cells[8].innerHTML

    if 
    (
        x0 == x1 && x1 == x2 && x1 !='' ||
        x3 == x4 && x4 == x5 && x4 !='' ||
        x6 == x7 && x7 == x8 && x7 !='' ||
        x0 == x3 && x3 == x6 && x3 !='' ||
        x1 == x4 && x4 == x7 && x4 !='' ||
        x2 == x5 && x5 == x8 && x5 !='' ||
        x0 == x4 && x4 == x8 && x4 !='' ||
        x2 == x4 && x4 == x6 && x4 !='' 
    )
    {
        endStyle(player)
    }     
    else if ( 
        x0 !='' &&
        x1 !='' &&
        x2 !='' &&
        x3 !='' &&
        x4 !='' &&
        x5 !='' &&
        x6 !='' &&
        x7 !='' &&
        x8 !=''   
        )
        {
            draw()
        }
}
*/
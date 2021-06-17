// const myHand = document.getElementById('myHand');
const playerHand = document.getElementById('playerHand');
const gameStart = document.getElementById('gameStart');
const player = document.getElementById('player');
const setHand = document.getElementById('setHand');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');
// const cpHand = document.getElementById('cpHand');
const log = document.getElementById('log');

let turn = 0;
let player1Num;
let player2Num;

setHand.addEventListener('click', function () {
    if (turn === 0) {
        player1Num = playerHand.value;
        player1Hand.textContent = "player1:セット完了";
        player.textContent = "player2";
        log.textContent = '???';
    } else if (turn === 1) {
        player2Num = playerHand.value;
        player2Hand.textContent = "player2:セット完了";
        player.textContent = "セット完了";
    } else {
        alert('これ以上押せないです')
    }
    turn += 1;
});




gameStart.addEventListener('click', () => {
    turn = 0;
    player.textContent = "player2";
    player1Hand.textContent = "player1:";
    player2Hand.textContent = "player2:";
    // myNum = myHand.value;
    // randomNum = Math.floor(Math.random() * 3);
    // console.log(myNum);
    // console.log(randomNum);
    console.log(player1Num);
    console.log(player2Num);
    switch (player1Num) {
        case '0': {
            if (player2Num === '0') {
                // cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：引き分け';
            } else if (player2Num === '1') {
                // cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：勝ち';
            } else {
                // cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：負け';
            };
            break;
        }

        case '1': {
            if (player2Num === '0') {
                // cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：負け';
            } else if (player2Num === '1') {
                // cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：引き分け';
            } else {
                // cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：勝ち';
            };
            break;
        }
        case '2': {
            if (player2Num === '0') {
                // cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：負け';
            } else if (player2Num === '1') {
                // cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：勝ち';
            } else {
                // cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：引き分け';
            };
            break;
        }

    }

});

const myHand = document.getElementById('myHand');
const gameStart = document.getElementById('gameStart');
const cpHand = document.getElementById('cpHand');
const log = document.getElementById('log');



gameStart.addEventListener('click', () => {
    myNum = myHand.value;
    randomNum = Math.floor(Math.random() * 3);
    console.log(myNum);
    console.log(randomNum);
    switch (myNum) {
        case '0': {
            if (randomNum === 0) {
                cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：引き分け';
            } else if (randomNum === 1) {
                cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：勝ち';
            } else {
                cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：負け';
            };
            break;
        }

        case '1': {
            if (randomNum === 0) {
                cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：負け';
            } else if (randomNum === 1) {
                cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：引き分け';
            } else {
                cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：勝ち';
            };
            break;
        }
        case '2': {
            if (randomNum === 0) {
                cpHand.textContent = '相手の手：グー';
                log.textContent = '結果は：負け';
            } else if (randomNum === 1) {
                cpHand.textContent = '相手の手：チョキ';
                log.textContent = '結果は：勝ち';
            } else {
                cpHand.textContent = '相手の手：パー';
                log.textContent = '結果は：引き分け';
            };
            break;
        }

    }

});

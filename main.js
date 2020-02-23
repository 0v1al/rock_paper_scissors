;(function (global) {
 
    "use strict"

    let modal = document.querySelector(".modal");
    let score = document.querySelectorAll(".sc");
    let resetScore = document.querySelector(".reset-score");
    let options = document.querySelectorAll(".option");
    let modalCloseBtn = document.querySelector(".close");
    let modalContent = document.querySelector(".modal-content");
    let modalText = document.querySelector(".text-modal");
    
    let scores = {
        user: 0,
        computer: 0
    };
    
    options.forEach(item => item.addEventListener('click', startGame));
    modalCloseBtn.addEventListener('click', closeModal);
    global.addEventListener('click', closeModalOut);
    resetScore.addEventListener('click', resetScoreBtn);
    
    function startGame (e) {

        let computer = Math.floor(Math.random() * 3);
        let userChoice = getUserChoice(e.target.id);
        let computerChoice = getComputerChoice(computer);
        let winner;

        resetScore.style.display = "block";
        //console.log(userChoice);
        //console.log(computerChoice);
        winner = getWinner(userChoice, computerChoice);
        updateScore(winner);
        //console.log("The winner is: " + winner + "!");
    
        if(winner === 'user') {
            showModal(winner, e.target.id, computer);
        }
        if(winner === 'comp') {
            showModal(winner, e.target.id, computer);
        }
        if(winner === 'draw') {
            showModal(winner, e.target.id, computer);
        }

    }
    
    function getComputerChoice (option) {
        if (option === 0) {
            return 'r';
        }
        if(option === 1) {
            return 'p';
        }
        if(option === 2) {
            return 's';
        }
    }
    
    function getUserChoice (option) {
        if(option === 'rock') {
            return 'r';
        }
        if(option === 'paper') {
            return 'p';
        }
        if(option === 'scissors') {
            return 's';
        }
    }
    
    function getWinner (user, comp) {
        if(user === 'r') {
            if(comp === 'p') {
                return 'comp';
            }
            if(comp === 's') {
                return 'user';
            }
            if(comp === 'r') {
                return 'draw';
            }
        }
        
        if(user === 'p') {
            if(comp === 's') {
                return 'comp';
            }
            if(comp === 'r') {
                return 'user';
            }
            if(comp === 'p') {
                return 'draw';
            }
        }
        
        if(user === 's') {
            if(comp === 'p') {
                return 'user';
            }
            if(comp === 'r') {
                return 'comp';
            }
            if(comp === 's') {
                return 'draw';
            }
        }
    }
    
    function updateScore (winner) {
        if(winner === 'user') {
            scores.user++;
            score[0].textContent = scores.user;
        }else if(winner === 'comp') {
            scores.computer++;
            score[1].textContent = scores.computer;
        }else {
            return;
        }
    }
    
    function resetScoreBtn () {
            scores.user = 0;
            scores.computer = 0;
            score[0].textContent = scores.user;
            score[1].textContent = scores.computer;
            resetScore.style.display = "none";
    }
    
    function showModal (winner, user, comp) {
        let userOption = getUserChoice(user);
        let computerOption = getComputerChoice(parseInt(comp));
        //console.log(userOption, computerOption);
        
        let u, c;
        
        if(userOption === 'r') u = 'rock';
        if(userOption === 'p') u = 'paper';
        if(userOption === 's') u = 'scissors';
        
        if(computerOption === 'r') c = 'rock';
        if(computerOption === 'p') c = 'paper';
        if(computerOption === 's') c = 'scissors';
    
        if(winner === 'user') {
            modalText.textContent = `You win the round with option "${u}" against "${c}"!`;
        }
        if(winner === 'comp') {
            modalText.textContent = `You lost the round with option "${u}" against "${c}"!`;
        }
        if(winner === 'draw') {
            modalText.textContent = `It's a draw, you both choose "${u}!"`;
        }
        modal.style.display = "block";
    }
    
    function closeModal () {
        modal.style.display = "none";
    } 
    
    function closeModalOut (e) {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    }

} (window));



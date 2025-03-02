let button = document.querySelectorAll(".b");
let chance = true;
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset")
let winp = document.querySelector(".winp");
let count = 0;
const winpattern = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];
button.forEach(box => {//box is element for show each button
    box.addEventListener("click", () => {
        if (chance) {
            box.style.color="yellow"
            box.innerText = "X";
            chance = false
        }
        else {
            box.style.color="violet"
            box.innerText = "O";
            chance = true
        }
        box.disabled = true;
        findwinner();
        count++;
        if (count == 9) {
            winp.innerText = `Draw`;
            winp.classList.remove("hide");
        }
    })
});

const enablebutton = () => {
    for (let b of button) {
        b.disabled = false
        b.innerText = "";
    }
}
const resetgame = () => {
    chance = true;
    count = 0;
    enablebutton();
    winp.classList.add("hide");
}


const findwinner = () => {
    for (const parray of winpattern) {
        // console.log(parray);
        // console.log(parray[0],parray[1],parray[2]);
        let pos1 = button[parray[0]].innerText;
        let pos2 = button[parray[1]].innerText;
        let pos3 = button[parray[2]].innerText;
        // console.log(pos1.innerText,parray[0]," ",pos2.innerText,parray[1]," ",pos3.innerText,parray[2])
        // console.log(pos2.innerText,parray[1])
        // console.log(pos3.innerText,parray[2])
        // ,pos2.innerText,pos3.innerText);
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner ", pos1);
                winnershow(pos1);
            }
        }

    }
}

const buttonlock = () => {
    for (let b of button) {
        b.disabled = true;
    }
}
const winnershow = (winner) => {
    winp.innerText = `Winner is ${winner}`;
    winp.classList.remove("hide");
    buttonlock();
}
reset.addEventListener("click", resetgame)
newgame.addEventListener("click", resetgame)

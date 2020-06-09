//Establish variable boxes using all elements with class name 'box'

var boxes = document.getElementsByClassName('box'), X_or_O = 0;

//------------------------------------------

//Set 'onClick' event so that alternate clicks result in either an 'X' or 'O'.

for(var i=0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
        if(this.innerHTML!=='X'&& this.innerHTML!=='O') 

        if(X_or_O%2===0){
            console.log(X_or_O)
            this.innerHTML='X'
            Winner()
            nonWinner()
            X_or_O+=1
        }

        else {
            console.log(X_or_O)
            this.innerHTML="O"
            Winner()
            nonWinner()
            X_or_O+=1
        }

    }
}

//------------------------------------------

//Victory Conditions
function Winner() {

//Define all possible victory conditions

if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
selectWinnerBoxes(box1,box2,box3);

if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
selectWinnerBoxes(box4,box5,box6);

if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
selectWinnerBoxes(box7,box8,box9);

if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
selectWinnerBoxes(box1,box4,box7);

if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
selectWinnerBoxes(box2,box5,box8);

if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
selectWinnerBoxes(box3,box6,box9);

if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
selectWinnerBoxes(box1,box5,box9);

if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
selectWinnerBoxes(box3,box5,box7);
}

//------------------------------------------
//Determine Non-Winner Boxes
function nonWinner() {

//Set all Non-Winner Conditions

if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
selectNonWinnerBoxes(box4,box5,box6,box6,box8,box9);
    
if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
selectNonWinnerBoxes(box1,box2,box3,box7,box8,box9);

if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
selectNonWinnerBoxes(box1,box2,box3,box4,box5,box6);

if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
selectNonWinnerBoxes(box2,box3,box5,box8,box9);

if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
selectNonWinnerBoxes(box1,box3,box4,box6,box7,box9);

if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
selectNonWinnerBoxes(box1,box2,box4,box5,box7,box8);

if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
selectNonWinnerBoxes(box2,box3,box4,box6,box7,box8);
    
if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
selectNonWinnerBoxes(box1,box2,box4,box6,box8,box9);
}

//------------------------------------------

//Indicate Winner Boxes and X or O victory

function selectWinnerBoxes(victory1,victory2,victory3) {
    victory1.classList.add('win')
    victory2.classList.add('win')
    victory3.classList.add('win')
    turn.innerHTML = victory1.innerHTML + " Won. Congrats!"
}

//Indicate Non-Winner Boxes

function selectNonWinnerBoxes (v4,v5,v6,v7,v8,v9){
    v4.classList.add('loss')
    v5.classList.add('loss')
    v6.classList.add('loss')
    v7.classList.add('loss')
    v8.classList.add('loss')
    v9.classList.add('loss')

}
//-----------------------------------------

//Reset Gameboard

function replay() {

    for(var i=0; i < boxes.length; i++) {
        boxes[i].classList.remove('win')
        boxes[i].classList.remove('loss');
        boxes[i].innerHTML = '';
        turn.innerHTML ='Play';
    }
}
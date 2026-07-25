let count = 0;

const display =  document.querySelector("#display");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
function updateDisplay(){
    display.textContent = count;
    updateColor();
}
increaseBtn.addEventListener( "click" , () => {
    if(count<10){
        count++;
    }
    updateDisplay();
    
});

decreaseBtn.addEventListener("click" , () => {
    if (count > 0) {
    count--;
}
    updateDisplay();

} );
resetBtn.addEventListener("click" , ()=> {
    count = 0;
    updateDisplay();

} );
function updateColor(){
    if (count === 0) {
        display.style.color = "black";
    } else {
        display.style.color = "green";
    }
}
updateDisplay();


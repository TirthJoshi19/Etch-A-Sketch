let color = "black";
// I took yt's help but I understood the concepts 
document.addEventListener("DOMContentLoaded", () => {
   console.log("hi");
   createBoard(16);
   let popup = document.querySelector("#popup");
   popup.addEventListener("click", ()=> {
      let size = getSize();
      createBoard(size)
   })

})
function createBoard(size) {
   let board = document.querySelector('.container');
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let numDivs = size * size;

   for(i = 0; i < numDivs; i++){
      let div = document.createElement("div");
      board.insertAdjacentElement("beforeend", div)
      div.addEventListener("mouseover", colorDiv)
   }

}

let getSize = ()=>{
   let input = prompt("What size of the board would you prefer?");
   let msg = document.querySelector("#msg");
   if(input == ""){
      msg.innerHTML = 'Please enter a number';
   }
   else if(input < 0 || input > 100){
      msg.innerHTML = "Please provide a number between 0 and 100s";
   }
   else {
      msg.innerHTML = "You can play now!";
      return input;
   }
}
function colorDiv(){
   let div = event.target
   if(color == "random"){
      div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
   }
   else {
      div.style.backgroundColor = 'black'
   }
}
function setColor(colorChoice){
   color = colorChoice;

}


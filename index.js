const billAmount  = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#Cash-given");
const checkButton = document.querySelector("#check_btn");
const message = document.querySelector(".error-message");
const numOfNotes = document.querySelectorAll(".No_of_notes");
//console.log(numOfNotes);


checkButton.addEventListener("click", () =>{
    message.style.display = "none";
    if(billAmount.value > 0 && typeof(billAmount.value) == "number" ){
      if(cashGiven.value >= billAmount.value){
          const change  = cashGiven.value - billAmount.value;
          calculateChange(change);
      }
      else{
        showMessage("Cash should be atleast equal to bill amount");
      }
    }
    else{
        showMessage("Invalid Bill amount");
    }
}
   

)

const availableNotes = [2000,500,100,20,10,5,1];
const calculateChange = (ch) => {
   for(let i=0; i<availableNotes.length; i++){
    const numberOfNotes = Math.trunc(ch/availableNotes[i]);
    ch %= availableNotes[i];
    numOfNotes[i].innerText = numberOfNotes;
    
   }
}

const showMessage = (msg) => {
    message.style.display  = "block";
    message.innerText = msg;
}
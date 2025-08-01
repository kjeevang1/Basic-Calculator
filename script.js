
const display = document.getElementById("display");

function addtodisplay(input){
   
    display.value +=input;
}

function cleardisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Err"
    }
}

function deletedisplay() {
    display.value = display.value.slice(0, -1);
}


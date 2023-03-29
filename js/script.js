const bodyBac = document.getElementsByTagName("body")[0];
const colors = ["#c440ff", "#2f2518","green","#15ffb6","violet", "#ff2a9d","red", "#aab5ff", "purple", "#ff6ad2", "yellow", "#55ff6d","blue","#4077ff", "gray", "#ff2a9d","orange"];
let count= 0;


function changeColor() {
  loop =  setTimeout("changeColor()",300); 
  bodyBac.style.background = colors[count++]
  
  if(count > colors.length){
    count = 0;
  }
}

function stopColor() {
//bodyBac.style.background = "white"
 clearTimeout(loop);
}
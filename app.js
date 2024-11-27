let total=0;
let done=0;
console.log("hello");
function adtask(){
    const newtask=document.createElement("li");
    const addtask=document.getElementById("addtask");
    addtask.appendChild(newtask);
    newtask.textContent=document.getElementById("inputtext").value
const newelement=document.createElement("button");
newelement.id="bid";
newtask.appendChild(newelement);
newelement.addEventListener("click", () => {
    newelement.style.backgroundColor = "lightgreen";
    newelement.disabled = true; 
    done++;
    document.getElementById("donenumber").innerHTML=done;
    checkCompletion();
    //savedata();
});

    
    if(document.getElementById("inputtext").value.trim()===""){
        alert("Please  Enter a Task");
        newtask.remove();
        return;
    }
    document.getElementById("inputtext").value="";
    deletbutton(newtask,newelement);
    total++;
    document.getElementById("totalnumber").innerHTML = total;
    checkCompletion();
    
    }
    function deletbutton(newtask,newelement){
const dltbutton=document.createElement("button")
dltbutton.id="dltbuttonid";
const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash");
    icon.id="iconid"; 
    dltbutton.appendChild(icon);
    newtask.appendChild(dltbutton);
    dltbutton.addEventListener("click",()=>{
        if (newelement.style.backgroundColor === "lightgreen") {
            done--; 
            document.getElementById("donenumber").innerHTML = done;
        }
        
        newtask.remove();
        total--;

        document.getElementById("totalnumber").innerHTML = total;
        checkCompletion();
        //savedata();
        //showtask();
    })
    }
    const inputField = document.getElementById("inputtext");


inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {  
        event.preventDefault();  
        adtask();  
    }
});
const button=document.getElementById("add");
button.addEventListener("click",()=>{
    adtask();

})
function checkCompletion() {
    const comptext = document.getElementById("comptext");
    if (done === total && total > 0) {
        comptext.innerHTML = "Congratulations! Your all tasks are completed!";
        console.log("All tasks completed!");
    } else {
        comptext.innerHTML = "";
    }
}
//function savedata(){
    //const addtask = document.getElementById("addtask");
    //localStorage.setItem("data", addtask.innerHTML)
//}
//function showtask(){
  //  const addtask = document.getElementById("addtask");   
//addtask.innerHTML=localStorage.getItem("data");
//}
//showtask();
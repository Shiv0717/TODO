const inputBox=document.getElementById("input-box");
const listCon=document.getElementById("list-con");

function addTask(){
    if(inputBox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.appendChild(li);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        li.appendChild(sp);
    }
    inputBox.value = " ";
    saveData();
}

listCon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
   else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listCon.innerHTML)
}
function showlist(){
    listCon.innerHTML = localStorage.getItem("data");
}
showlist();
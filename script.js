
const todo = document.getElementById("todo")
const containers= document.querySelectorAll(".container")
const TaskBtn = document.getElementById("create-task-btn")
const TaskInput = document.getElementById("create-task-input")
 TaskBtn.addEventListener("click",()=>{
    TaskBtn.style.display="none"
TaskInput.style.display="block"

 })
 TaskInput.addEventListener("keyup",(e)=>{
if(e.key=== "Enter"){
    const card=document.createElement("div")
    card.innerText=e.target.value;
    card.className = "card"
        card.draggable = true;
        card.addEventListener("dragstart",ondragstart)
        todo.appendChild(card);
        TaskInput.value="";
        TaskInput.style.display="none"
        TaskBtn.style.display="block";
} })
let draggedElement= null;
function ondragstart(e){
    draggedElement=e.target
    
}
function dragOver(e){
    if(e.currentTarget.id===draggedElement.parentNode.id)
        {
           
        return;
    }
    e.preventDefault();

}
function onDrop(e){
    e.currentTarget.appendChild(draggedElement);
}
for(let i=0;i<containers.length;i++){
    containers[i].addEventListener("dragover",dragOver)
    containers[i].addEventListener("drop",onDrop)
    
}
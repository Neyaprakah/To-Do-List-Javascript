let todo=[];
function add(){
    let addtask=document.getElementById("todoinput").value;
    if(addtask=="")
    {
        alert("Enter the Task");
    }
    else
    {
    todo.push(addtask);
    console.log(todo);
    document.getElementById("print").innerHTML=todo;
    }
}
function removet(){
    let removetask=document.getElementById("todoinput").value;
    if(removetask=="")
        {
            alert("Enter the Task");
        }
    else
    {    
    let ivalue=todo.indexOf(removetask);
    let removev=todo.splice(ivalue,1);
    console.log(todo);
    document.getElementById("print").innerHTML=todo;
    }
}

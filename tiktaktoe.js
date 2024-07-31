// let boxes=document.querySelectorAll(".box");


// document.addEventListener("click",()=>{
//     console.log("button was clicked");
let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turn=true;

let winningpatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [7,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turn)
    {
        box.innerText="x";
        box.style.color="black";
        box.style.backgroundcolor="white";
        turn=false;
    }
    else
    { 
       box.innerText="O";
       box.style.color="black";
       box.style.backgroundcolor="white";
       turn=true; 
    }
       box.disabled=true; 
      
       checkwinner();
       
    });
})
const showwinner=(winner)=>{
    msg.innerText=`congratulation ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};
const checkwinner=()=>{
    for(let pattern of winningpatern){
         let pos1value=boxes[pattern[0]].innerText;
         let pos2value=boxes[pattern[1]].innerText;
         let pos3value=boxes[pattern[2]].innerText;

         if(pos1value!="" && pos2value!="" && pos3value!="")
         {
         if(pos1value===pos2value && pos2value===pos3value)
         {
            console.log("winner",pos1value);
            showwinner(pos1value);
            boxes.disabled=true;
        
         }
         }

};

};

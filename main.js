number=100;
coco="<img src='Coconut.webp' width='150px' height='200px' id='coco' onclick='tap()'>"
coco_b="<img src='Breaked_Coconut.webp' width='200px' height='120px' id='coco' onclick='tap()'>"
pur_b="<button id='pur_b' onclick='pur()'><b>Purchase New Coconut</b></button>"
document.getElementById("coco_mar").innerHTML=coco;
function tap(){
number=number-1;
console.log(number);
document.getElementById("number").innerHTML=number;

if(number==0){
    document.getElementById("coco_mar").innerHTML=coco_b;
    document.getElementById("won").innerHTML="You won the game!!!!!!!!!";
    document.getElementById("pur_d").innerHTML=pur_b;
    }
}

function pur(){
document.getElementById("coco_mar").innerHTML=coco;
document.getElementById("number").innerHTML="100000";
document.getElementById("pur_d").innerHTML="";
document.getElementById("won").innerHTML="";
number=100;
}


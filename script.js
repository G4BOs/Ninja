var worlds =[
    [[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,3,1],
    [1,0,1,1,0,1,0,1,1,0,1],
    [1,2,1,1,0,1,0,1,1,0,1],
    [1,2,1,1,2,3,0,0,0,2,1],
    [1,0,0,0,3,1,0,1,1,0,1],
    [1,2,1,1,0,1,0,1,1,0,1],
    [1,0,1,1,0,1,0,1,1,3,1],
    [1,3,0,2,0,2,3,0,0,2,1],
    [1,1,1,1,1,1,1,1,1,1,1],],
    //World 2
    [[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,2,3,0,3,0,2,1],
    [1,3,1,1,1,1,1,1,1,0,1],
    [1,3,0,2,0,2,0,3,2,2,1],
    [1,3,1,1,1,1,0,1,1,0,1],
    [1,0,0,3,2,3,2,3,2,2,1],
    [1,2,1,1,1,1,1,1,1,0,1],
    [1,2,1,1,1,1,1,1,1,0,1],
    [1,0,2,3,0,2,0,2,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1],],
    //World 3
    [[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,2,0,3,0,2,3,0,1],
    [1,0,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,1,3,1],
    [1,0,1,0,1,2,1,0,1,2,1],
    [1,0,0,0,0,3,2,3,3,0,1],
    [1,0,1,3,0,2,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,2,2,3,2,0,2,0,1],
    [1,1,1,1,1,1,1,1,1,1,1],],
    //World 4
    [[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,2,3,2,0,3,0,3,1],
    [1,0,1,1,1,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,0,3,0,1],
    [1,2,1,0,3,0,2,0,2,0,1],
    [1,0,1,1,1,1,0,1,1,0,1],
    [1,3,0,0,2,0,2,3,1,3,1],
    [1,2,1,1,1,1,0,1,1,2,1],
    [1,3,0,0,3,2,0,2,3,2,1],
    [1,1,1,1,1,1,1,1,1,1,1],],
    //World 5
    [[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,3,1,1,1,0,0,0,1],
    [1,2,1,3,0,0,1,0,1,0,1],
    [1,2,0,3,1,0,1,0,1,0,1],
    [1,1,1,3,1,0,0,0,1,0,1],
    [1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,3,1,0,0,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,3,2,1,2,3,2,0,2,1],
    [1,1,1,1,1,1,1,1,1,1,1],],

]

var world=worlds[Math.floor(Math.random()*worlds.length)]

var worldDic={
    0:'blank',
    1:'wall',
    2:'sushi',
    3:'onigiri',

}
//===========Mensajes========
let win=document.getElementById('win');
let lose=document.getElementById('lose');
let vidarest=document.getElementById('vidas');
win.style.display='none';
lose.style.display='none';


var puntos=0;

//=============Items restantes
var totalitem=[];

//===================Vida===========
let vida=3;

function totaldeitems(){
    for(let i=0;i<world.length;i++){
        for(let x=0;x<world[i].length;x++){
            if(world[i][x]==2 ||world[i][x]==3){
                totalitem.push(world[i][x]);
                
            }
        }
    }
   
}
totaldeitems()

var itemslength=totalitem.length;

function drawWorld(){
output="";

for(var row=0;row<world.length;row++){
   output += "<div class='row'>";
   for(var x=0;x<world[row].length;x++){
    output+="<div class="+worldDic[world[row][x]]+"></div>"
   }
   output+="</div>"
}

document.getElementById('world').innerHTML=output
}
drawWorld()

//===============Ninja Position==========
var ninjaman={
x: 1,
y: 1,
}
var lastPos={
    x2: 0,
    y2: 0,


}

//===============Pinky Position=======
var pinkyPos={
    x:7,
    y:1,
}

//==================Distancia===========



//================Draw NinjaMan========
function drawNinjaMan(){
document.getElementById('ninjaman').style.top= ninjaman.y * 40+"px"
document.getElementById('ninjaman').style.left=ninjaman.x *  40+"px"
}
drawNinjaMan()

//==================Draw Pinky=============
function drawPinky(){
    document.getElementById('pinky').style.top= pinkyPos.y * 40+"px"
    document.getElementById('pinky').style.left=pinkyPos.x *  40+"px"
    }
    drawPinky()



//================Mover Fantasma==========
function moverPinky() {
    //===========GameOver Si terminan las vidas===========
    if(vida===0){vidarest.style.color='red';lose.style.display='block';return}

    //===========Game over si terminan los Items==========
    if(itemslength===0){return}


if(ninjaman.x<pinkyPos.x){pinkyPos.x--}
else if(ninjaman.x>pinkyPos.x){pinkyPos.x++}

if(ninjaman.y<pinkyPos.y){pinkyPos.y--}
else if(ninjaman.y>pinkyPos.y){pinkyPos.y++}

    drawPinky();


    if(ninjaman.x==pinkyPos.x&&ninjaman.y==pinkyPos.y){
        console.log('perdiste');
        pinkyPos.x=8;pinkyPos.y=1;ninjaman.x=1;ninjaman.y=1

        vida--;
        vidarest.innerText="Vidas: "+vida;
        
    }
    if(vida===0){ }
}

setInterval(() => {
    moverPinky();
}, 500);



document.onkeydown = function(e){
    //======Game Over=========
    if(vida===0){return}
    if(itemslength===0){return}

//Left
if(e.keyCode==37){
    if(world[ninjaman.y][ninjaman.x - 1] != 1){ninjaman.x--;}
}

//Right
if(e.keyCode==39){
    if(world[ninjaman.y][ninjaman.x + 1] != 1){ninjaman.x++};
}

//Up
if(e.keyCode==38){
    if(world[ninjaman.y -1][ninjaman.x]!=1){ninjaman.y--;}
}

//Dawn
if(e.keyCode==40){
    if(world[ninjaman.y +1][ninjaman.x]!=1){ninjaman.y++;}
}
drawNinjaMan()
console.log("x:"+ninjaman.x+"--"+"Y:"+ninjaman.y)


//Comer
if(world[ninjaman.y][ninjaman.x]==2||world[ninjaman.y][ninjaman.x]==3){world[ninjaman.y][ninjaman.x]=0; puntos++;itemslength--}
drawWorld()

var pts=document.getElementById('pts');


pts.innerText="Puntos: "+puntos;


console.log(itemslength)


final()
}


function final(){
    
    if(itemslength==0){
        win.style.display='block';
        document.getElementById('pinky').disabled=true
    
    }
}
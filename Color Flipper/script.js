const div= document.getElementsByTagName("div")[0]
document.querySelector("bt2")
let x= document.getElementById("bt1").style.backgroundColor="red";
let y= document.getElementById("bt2").style.backgroundColor="green";
let z= document.getElementById("bt3").style.backgroundColor="pink";

div.style.backgroundColor="#cdbecd";

function setcolor(colorname)
{
    div.style.backgroundColor= colorname;
}
setcolor("pink");
function randomcolor(){
    const x= Math.round(Math.random()* 255);
    const y= Math.round(Math.random()* 255);
    const z= Math.round(Math.random()* 255);

    const color= `rgb(${x}, ${y}, ${z})`
    div.style.backgroundColor = color;

}
randomcolor();
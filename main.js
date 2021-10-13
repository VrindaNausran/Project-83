var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color;
var width;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color=document.getElementById("Color").value ;
    width= document.getElementById("Width").value;
    mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent= "mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    mouseEvent= "mousemove";
}
function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
   ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
   ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();  
    }
    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    current_position_of_touch_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
   ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke(); 
    
    last_position_of_touch_x= current_position_of_touch_x;
    last_position_of_touch_y= current_position_of_touch_y;
}
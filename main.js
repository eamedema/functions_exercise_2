"use strict";

(function () {
    let position = 0;
    let direction = "forward";

function moveForward(distance){
    if (direction==="forward") {
        position += distance;
    }
    else if (direction==="backward") {
        position -= distance;
    }
    return position;
}

function moveBackward(distance){
    if (direction === "forward") {
        position -= distance;
    }
    else if (direction === "backward"){
        position += distance;
    }
    return position;
}


function turnAround(){
  direction = "backward";
}

function printLocation(position){
    console.log(position);
}

moveForward(5)
moveBackward(3)
printLocation(position)
turnAround()
moveForward(10)
moveBackward(5)
printLocation(position)
})();

/**
 * Created by Lenovo on 11/29/2016.
 */

// Purple Rain
//

var drops = [];

function setup(){
    createCanvas(649,360);
    for (var i =0; i<500; i++){
        drops[i] =  new Drop();
    }
}

function draw(){
    background(230,230,250);
    for(var i = 0; i <drops.length; i++){
        drops[i].fall();
        drops[i].show();
    }
}



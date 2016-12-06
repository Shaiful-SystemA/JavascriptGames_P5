/**
 * Created by Lenovo on 12/5/2016.
 */



var prob = 5000;
var button;
var started = false;
var total = 0;

function setup(){
    noCanvas();
    button = select('#start');
    button.mousePressed(startLottery);
    noLoop();
}

function startLottery(){
    started = true;
    total = 0;
    loop();
}

function draw() {

    if(started){
    var r = floor(random(prob));

    var results = select('#results');

    if (r == 1) {
       // console.log('won lottery');
        results.html('Try again');
        noLoop();
    } else {
        results.html('Try again');
       // console.log('log lottery');
    }

    total ++;
    select('total').html(total);

    }
}






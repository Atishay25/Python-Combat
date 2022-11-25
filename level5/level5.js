var gem_found = [false, false, false, false, false];
var total_gems = 0;
var pos_x = 0;
var pos_y = 0;
var reloaded = true;
var insequence = true;
var id_order = [];
var index = 0;
var speed = 500;
speed_dict = {250 : "fast", 500 : "medium", "750" : "slow"};
const speed_show = document.getElementById("speed_");
speed_show.innerHTML = speed_dict[speed];
window.dict = {};

function speedup(){
    if(speed == 500){
        speed = 250;
    }
    else if(speed == 750){
        speed = 500;
    }
    speed_show.innerHTML = speed_dict[speed];
}

function speeddown(){
    if(speed == 500){
        speed = 750;
    }
    else if(speed == 250){
        speed = 500;
    }
    speed_show.innerHTML = speed_dict[speed];
}
$(document).ready(function () {
    
})
/**
 * @brief lmao function
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
 */
function add_weapon(px, py, n){
    elem = document.createElement('img');
    elem.src = "../images/weapon.png";
    elem.id = n*10000 + px*100 + py;
    elem.className = "gems";
    elem.style.left = px + "cm";
    elem.style.top = py + "cm";
    $("#arena").append([elem]);
}
change = {
    surface: function (r) {
        if (r == 1) {
            var id_ = pos_x * 100 + pos_y;
            var next_id = pos_x * 100 + pos_y + 2;
            if (pos_y + 2 <= 14) {
                // var found = false;
                pos_y = pos_y + 2;
                $('#player').animate({ top: '+=2cm' }, speed)
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" }, speed,
                    function(){
                    alert("Dont player out of arena");
                    window.location.reload();
                });
                reloaded = false;
                return -1;
            }
        }
        if (r == 2) {
            var id_ = pos_x * 100 + pos_y;
            var next_id = pos_x * 100 + pos_y - 2;
            if (pos_y - 2 >= 0) {
                var found = false;
                pos_y = pos_y - 2;
                $('#player').animate({ top: '-=2cm' }, speed);
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" }, speed,
                function(){
                    alert("Dont player out of arena");
                    window.location.reload();
                });
                reloaded = false;
                return -1;
            }
        }
        if (r == 3) {
            var id_ = pos_x * 100 + pos_y;
            var next_id = (pos_x + 2) * 100 + pos_y;
            if (pos_x + 2 <= 14) {
                var found = false;
                pos_x = pos_x + 2;
                $('#player').animate({ left: '+=2cm' }, speed);
                
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" }, speed,
                    function(){
                        alert("Dont player out of arena");
                        window.location.reload();
                    });
                reloaded = false;
                return -1;
            }
        }
        if (r == 4) {
            var id_ = pos_x * 100 + pos_y;
            var next_id = (pos_x - 2) * 100 + pos_y;
            if (pos_x - 2 >= 0) {
                var found = false;
                pos_x = pos_x - 2;
                $('#player').animate({ left: '-=2cm' }, speed);
                
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" }, speed,
                    function(){
                        alert("Dont player out of arena");
                        window.location.reload();
                    });
                reloaded = false;
                return -1;
            }
        }
    }
}


function weapon(){
    i = 0;
    for (; i < 5; i++){
        if(!gem_found[i]){
            break;
        }
    }
    id_order.push((i+1)*10000 + pos_x*100 + pos_y);
    if(JSON.stringify(document.getElementById((i+1)*10000 + pos_x*100 + pos_y)) != "null"){
        $("#player").animate({top : "+=0cm"}, speed, 
            function(){
                let weapon_ = "#" + id_order[index];
                index++;
                $(weapon_).css("display", "none");
            }
        );
        gem_found[i] = true;
    }
    else{
        insequence = false;
    }
}

function check_success(){
    if(!insequence){
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "weapons not collected in correct order" + '<br />';
        $("#result").css("color", "red");
    }
    for (i in gem_found){
        if(!i){
            var res = document.getElementById('result');
            res.innerHTML = " TRY AGAIN" + '<br />' + "All weapons not collected." + '<br />';
            $("#result").css("color", "red");    
        }
    }
    return 0;
}
function print_stat(){
    (function () {
        var old = console.log;
        var logger = document.getElementById('log');
        // console.clear();
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
            }
            else{
                logger.innerHTML += message + '<br />'
            }
        }
    })();
}
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    // console.clear();
    console.log = function (message) {
        if(String(message).includes("level1/level1.html#__main__")){
            logger.innerHTML += "error" + '<br />';
        }
        else if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        }
        else{
            logger.innerHTML += message + '<br />'
        }
    }
})();
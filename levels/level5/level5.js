/**
* @file level5.js
* @brief JAVASCRIPT FOR LEVEL 5
* @author Prolific Pythonists
* @date 24-11-2022
*/
///The list stores info about which gems are collected.
var gem_found = [false, false, false, false, false];
///stores the X-coordinate of warrior
var pos_x = 0;
///stores the Y-coordinate of warrior
var pos_y = 0;
///check if reloading was done before or not
var reloaded = true;
///it stores true if the gems are collected in sequence else false.
var insequence = true;
///it stores the values as the gems are added to the arena.
var id_order = [];
///stores the index upto which the gems found are checked while checking in animate part of jquery.<br>This is required since jquery implements animation through queue.
var index = 0;
///For the animation speed of the player.
var speed = 500;
///maps speeds in milliseconds to the name corresponding to them.
speed_dict = {250 : "fast", 500 : "medium", "750" : "slow"};
///The element in which we have to show speed.
const speed_show = document.getElementById("speed_");
speed_show.innerHTML = speed_dict[speed];

/**
 * This function is used to restore the values of the global variables after reload.
 */
function create_arena(){
    pos_x = 0;
    pos_y = 0;
    insequence = true;
    id_order = [];
    gem_found = [false, false, false, false];
    index = 0;
}
/**
 * This function is bind to the increase button it decreases the value of var speed so that animation time is less and hence speed increases finally.
 */
function speedup(){
    if(speed == 500){
        speed = 250;
    }
    else if(speed == 750){
        speed = 500;
    }
    speed_show.innerHTML = speed_dict[speed];
}
/**
 * This function is bind to the decrease button it increases the value of var speed so that animation time is more and hence speed decreases finally.
 */
function speeddown(){
    if(speed == 500){
        speed = 750;
    }
    else if(speed == 250){
        speed = 500;
    }
    speed_show.innerHTML = speed_dict[speed];
}
/**
 * This function checks if the gem is collected or not in order.
 * <br>It sets value of insequence to be true if gems are collected in correct order.
 */
 function weapon(){
    i = 0;
    for (; i < 5; i++){
        if(!gem_found[i]){
            break;
        }
    }
    id_order.push((i+1)*10000 + pos_x*100 + pos_y);
    if(JSON.stringify(document.getElementById((i+1)*10000 + pos_x*100 + pos_y)) != "null"){
        $("#player").animate({top : "+=0cm"}, 
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

/**
 * The function checks if the players code is correct or not. <br>
 * If it is correct then it prints the message and if it is not, it will reload page after 5 second.
 */
 function check_success(){
    if(!insequence){
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "weapons not collected in correct order" + '<br />';
        $("#result").css("color", "red");
        $("#player").animate({top: "+=0cm"}, function(){
            setTimeout(function(){reloaded = false;location.reload();}, 3000);
        })
        return;
    }
    for (i = 0; i < 5; i++){
        if(!gem_found[i]){
            var res = document.getElementById('result');
            res.innerHTML = " TRY AGAIN" + '<br />' + "All weapons not collected." + '<br />';
            $("#result").css("color", "red");
            $("#player").animate({top: "+=0cm"}, function(){
                setTimeout(function(){reloaded = false;location.reload();}, 3000);
            })
            return;    
        }
    }
    var res = document.getElementById('result');
    res.innerHTML = "WELL DONE, you have collected the Space stone." + '<br />';
    $("#result").css("color", "green");
}

/**
 * This function is used to add gems on the arena using the location parameters like px, py provided from brython.<br>
 * n is used to indicate the nth gem added.
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
 */
function add_weapon(px, py, n){
    elem = document.createElement('img');
    elem.src = "../images/level5/space.png";
    elem.id = n*10000 + px*100 + py;
    elem.className = "gems";
    elem.style.left = px + "cm";
    elem.style.top = py + "cm";
    $("#arena").append([elem]);
}
/**
 * This function controls the movement of warrior based on the input given.<br>
 * Exception handling is also done in this function as while moving if warrior steps out of arena alert box is shown
 * @param {int} r integer determining direction of traversal. 1 => move_up, 2=>move_down() 3 => move_right() 4=> move_left  
 */
function walk(r) {
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
                    alert("Dont move out of arena");
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
                    alert("Dont move out of arena");
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
                        alert("Dont move out of arena");
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
                        alert("Dont move out of arena");
                        window.location.reload();
                    });
                reloaded = false;
                return -1;
            }
        }
    }

/**
 * This function is used to show print statement in the logger. <br> This function is implemented by overloading console.log function to show
 * print statements on logger as well.
 */
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
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        }
        else{
            logger.innerHTML += message + '<br />'
        }
    }
})();
$(document).ready(function () {
    create_arena();
})
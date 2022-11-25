/**
* @file level2.js
* @brief JAVASCRIPT FOR LEVEL 2
* @author Prolific Pythonists
* @date 24-11-2022
*/
///stores the total number of gems in the path
var total_gems = 0; 
///stores the X-coordinate of warrior
var pos_x = 0;
///stores the Y-coordinate of warrior
var pos_y = 14;
///check if reloading was done before or not
var reloaded = true;
///For the animation speed of the player.
var speed = 500;
///maps speeds in milliseconds to the name corresponding to them.
speed_dict = {250 : "fast", 500 : "medium", "750" : "slow"};
///The element in which we have to show speed.
const speed_show = document.getElementById("speed_");
speed_show.innerHTML = speed_dict[speed];

//gem_id == 50000 means final position reached
//gem_id == 30000 means wrong path taken
//gem_id == 10000 means take above path
//gem_id == 20000 means take below path
///stores relation between paths i.e. which path to be followed after a certain path.
window.dict = {};
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
 * The function creates the arena using recursion of create_map. <br>
 * It also restores the values of global variables.
 */
function create_arena(){
    pos_x = 0;
    pos_y = 14;
    reloaded = true;
    window.dict = {};
    if(Math.random() > 0.5){
        create_map(0, 14, 3, 1);
    }
    else{
        create_map(0, 14, 3, 2);
    }
}
/**
 * This function first creates a horizontal path and two vertical paths one above and one below.Assigns the values to the stones and then recalls itself.
 * @param {int} x x coordinate at which recursion should start
 * @param {int} y y coordinate at which recursion should start
 * @param {int} n total paths to be added to make the path symmetric.
 * @param {int} val the value to be assigned to each stone for direction.
 * @returns 
 */
function create_map(x, y, n, val){
    if(n == 0){
        elem1 = document.createElement('div');
        elem1.id = 100 * x + y;
        elem1.className = "path horizontal";
        elem1.style.left = x + "cm";
        elem1.style.top = y + "cm";
        x = x + 2;
        var curr = 100 * (x - 2) + y;
        var next = 100 * x + y;
        if (curr in dict) {
            dict[curr].push(next);
        }
        else {
            dict[curr] = [next];
        }
        if (next in dict) {
            dict[next].append[curr];
        }
        else {
            dict[next] = [curr];
        }
        elem2 = document.createElement('div');
        elem2.id = 100 * x + y;
        elem2.className = "path horizontal";
        elem2.style.left = x + "cm";
        elem2.style.top = y + "cm";
        x = x + 2;
        var curr = 100 * (x - 2) + y;
        var next = 100 * x + y;
        if (curr in dict) {
            dict[curr].push(next);
        }
        else {
            dict[curr] = [next];
        }
        if (next in dict) {
            dict[next].append[curr];
        }
        else {
            dict[next] = [curr];
        }
        $('#arena').append([elem1, elem2]);
        //create a key to go further.
        gem = document.createElement('div');
        gem.id = 10000*(val) + 100 * x + y;
        gem.className = "gems";
        gem.style.left = x + "cm";
        gem.style.top = y + "cm";
        $('#arena').append([gem]);
        //
        return;
    }
    elem1 = document.createElement('div');
    elem1.id = 100 * x + y;
    elem1.className = "path horizontal";
    elem1.style.left = x + "cm";
    elem1.style.top = y + "cm";
    x = x + 2;
    var curr = 100 * (x - 2) + y;
    var next = 100 * x + y;
    if (curr in dict) {
        dict[curr].push(next);
    }
    else {
        dict[curr] = [next];
    }
    if (next in dict) {
        dict[next].append[curr];
    }
    else {
        dict[next] = [curr];
    }
    elem2 = document.createElement('div');
    elem2.id = 100 * x + y;
    elem2.className = "path horizontal";
    elem2.style.left = x + "cm";
    elem2.style.top = y + "cm";
    x = x + 2;
    var curr = 100 * (x - 2) + y;
    var next = 100 * x + y;
    if (curr in dict) {
        dict[curr].push(next);
    }
    else {
        dict[curr] = [next];
    }
    if (next in dict) {
        dict[next].append[curr];
    }
    else {
        dict[next] = [curr];
    }
    $('#arena').append([elem1, elem2]);
    //create a key to go further.
    gem = document.createElement('div');
    gem.id = 10000*(val) + 100 * x + y;
    gem.className = "gems";
    gem.style.left = x + "cm";
    gem.style.top = y + "cm";   
    $('#arena').append([gem])
    var p = Math.pow(2,n-1);
    var p_x = x;
    var p_y = y;
    while(p != 0){
        p = p-1;
        elem = document.createElement('div');
        elem.id = 100 * p_x + p_y;
        elem.className = "path vertical";
        elem.style.left = p_x + "cm";
        elem.style.top = (p_y - 2) + "cm";
        p_y = p_y - 2;
        
        var curr = 100 * (p_x) + p_y + 2;
        var next = 100 * p_x + p_y;
        if (curr in dict) {
            dict[curr].push(next);
        }
        else {
            dict[curr] = [next];
        }
        if (next in dict) {
            dict[next].append[curr];
        }
        else {
            dict[next] = [curr];
        }
        $('#arena').append([elem]);
    }
    if(val == 1){
        if(Math.random() > 0.5){
            create_map(p_x, p_y, n-1, 1);
        }
        else{
            create_map(p_x, p_y, n-1, 2);
        }
    }
    else{
        create_map(p_x, p_y, n-1, 3);
    }
    p = Math.pow(2,n-1);
    p_x = x;
    p_y = y;
    while (p != 0) {
        p = p - 1;
        elem = document.createElement('div');
        elem.id = 100 * p_x + p_y;
        elem.className = "path vertical";
        elem.style.left = p_x + "cm";
        elem.style.top = p_y + "cm";
        p_y = p_y + 2;
        var curr = 100 * (p_x) + p_y - 2;
        var next = 100 * p_x + p_y;
        if (curr in dict) {
            dict[curr].push(next);
        }
        else {
            dict[curr] = [next];
        }
        if (next in dict) {
            dict[next].append[curr];
        }
        else {
            dict[next] = [curr];
        }
        $('#arena').append([elem]);
    }
    if(val == 2){
        if(Math.random() > 0.5){
            create_map(p_x, p_y, n-1, 1);
        }
        else{
            create_map(p_x, p_y, n-1, 2);
        }
    }
    else{
        create_map(p_x, p_y, n-1, 3);
    }
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ top: '+=2cm' },speed)
                pos_y = pos_y + 2;
            }
            else if (reloaded) {
                $('#player').animate({ top : '+=0cm' },speed,function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ top: '-=2cm' },speed);
                pos_y = pos_y - 2;
            }
            else if (reloaded) {
                $('#player').animate({ top : '+=0cm' },speed,function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ left: '+=2cm' },speed);
                pos_x = pos_x + 2;
            }
            else if (reloaded) {
                $('#player').animate({ top : '+=0cm' },speed,function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ left: '-=2cm' },speed);
                pos_x = pos_x - 2;
            }
            else if (reloaded) {
                $('#player').animate({ top : '+=0cm' },speed,function(){
                    alert("Dont move out of arena");
                    window.location.reload();
                });
                reloaded = false;
                return -1;
            }
        }
    }
/**
 * At each junction the value of each stone will be returned.<br>
 * If value is 1 then go above.
 * If value is 2 then go below
 * If value is 3 then you are on wrong path.
 * If value is -1 then there are no gems at that position. 
 * @returns the direction values and data type is int.
 */
function direction(){
    var gem_id1 = 10000 + 100*pos_x + pos_y;
    var gem_id2 = 20000 + 100*pos_x + pos_y;
    var gem_id3 = 30000 + 100*pos_x + pos_y;
    if(JSON.stringify(document.getElementById(gem_id1)) != "null"){return Math.trunc(1);}
    if(JSON.stringify(document.getElementById(gem_id2)) != "null"){return Math.trunc(2);}
    if(JSON.stringify(document.getElementById(gem_id3)) != "null"){return Math.trunc(3);}
    return -1;
}
/**
 * The function checks if the players code is correct or not. <br>
 * If it is correct then it prints the message and if it is not, it will reload page after 3 second.
 */
function check_success(){
    if(pos_x == 16 && (JSON.stringify(document.getElementById(10000 + 100*16 + pos_y)) != "null" || JSON.stringify(document.getElementById(20000 + 100*16 + pos_y)) != "null")){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE, you reached to the correct reality stone" + '<br />';
        $("#result").css("color", "green");
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = "TRY AGAIN" + '<br />' + "You have reached wrong destination";
        $("#result").css("color", "green");
        $("#player").animate({top: "+=0cm"}, function(){
            setTimeout(function(){reloaded = false;location.reload();}, 3000);
        })
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
$(document).ready(function () {
    
    create_arena();
    
})

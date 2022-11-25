/**
* @file level1.js
* @brief JAVASCRIPT FOR LEVEL 1
* @author Prolific Pythonists
* @date 24-11-2022
*/
///stores the total number of gems in the path
var total_gems = 0;
///stores the X-coordinate of warrior
var pos_x = 0;
///stores the Y-coordinate of warrior
var pos_y = 0;
///check if reloading was done before or not
var reloaded = true;
///For the animation speed of the player.
var speed = 500;
///maps speeds in milliseconds to the name corresponding to them.
speed_dict = {250 : "fast", 500 : "medium", "750" : "slow"};
///The element in which we have to show speed.
const speed_show = document.getElementById("speed_");
speed_show.innerHTML = speed_dict[speed];
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
 * This function creates the whole arena dynamically, and restores all values of the global variable when the site is reloaded.
 */
function create_arena(){
    {
        total_gems = 0;
        window.dict = {};
        reloaded = true;
        pos_x = 0;
        pos_y = 0;
        var ver = 6;
        var hori = 6;
        var posx = 0;
        var posy = 0;
        while (ver != 0 || hori != 0) {
            if (ver == 0) {
                while (hori != 0) {
                    hori = hori - 1;
                    elem = document.createElement('div');
                    elem.id = 100 * posx + posy;
                    elem.className = "path horizontal";
                    elem.style.left = posx + "cm";
                    elem.style.top = posy + "cm";
                    posx = posx + 2;
                    if (Math.random() > 0.6) {
                        gem = document.createElement('img');
                        gem.src = "../images/level1/time.png"
                        gem.id = 10000 + 100 * posx + posy;
                        gem.className = "gems";
                        gem.style.left = posx + "cm";
                        gem.style.top = posy + "cm";
                        $('#arena').append([gem]);
                        total_gems = total_gems + 1;
                    }
                    var curr = 100 * (posx - 2) + posy;
                    var next = 100 * posx + posy;
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
            }
            else if (hori == 0) {
                while (ver != 0) {
                    ver = ver - 1;
                    elem = document.createElement('div');
                    elem.id = 100 * posx + posy;
                    elem.className = "path vertical";
                    elem.style.left = posx + "cm";
                    elem.style.top = posy + "cm";
                    posy = posy + 2;
                    if (Math.random() > 0.6) {
                        gem = document.createElement('img');
                        gem.src = "../images/level1/time.png";
                        gem.id = 10000 + 100 * posx + posy;
                        gem.className = "gems";
                        gem.style.left = posx + "cm";
                        gem.style.top = posy + "cm";
                        $('#arena').append([gem]);
                        total_gems = total_gems + 1;
                    }
                    var curr = 100 * (posx) + posy - 2;
                    var next = 100 * posx + posy;
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
            }
            else {
                if (Math.random() < 0.5) {
                    ver = ver - 1;
                    elem = document.createElement('div');
                    elem.id = 100 * posx + posy;
                    elem.className = "path vertical";
                    elem.style.left = posx + "cm";
                    elem.style.top = posy + "cm";
                    posy = posy + 2;
                    if (Math.random() > 0.6) {
                        gem = document.createElement('img');
                        gem.src = "../images/level1/time.png";
                        gem.id = 10000 + 100 * posx + posy;
                        gem.className = "gems";
                        gem.style.left = posx + "cm";
                        gem.style.top = posy + "cm";
                        $('#arena').append([gem]);
                        total_gems = total_gems + 1;
                    }
                    var curr = 100 * (posx) + posy - 2;
                    var next = 100 * posx + posy;
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
                else {
                    hori = hori - 1;
                    elem = document.createElement('div');
                    elem.id = 100 * posx + posy;
                    elem.className = "path horizontal";
                    elem.style.left = posx + "cm";
                    elem.style.top = posy + "cm";
                    posx = posx + 2;
                    if (Math.random() > 0.6) {
                        gem = document.createElement('img');
                        gem.src = "../images/level1/time.png"
                        gem.id = 10000 + 100 * posx + posy;
                        gem.className = "gems";
                        gem.style.left = posx + "cm";
                        gem.style.top = posy + "cm";
                        $('#arena').append([gem]);
                        total_gems = total_gems + 1;
                    }
                    var curr = 100 * (posx - 2) + posy;
                    var next = 100 * posx + posy;
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
            }
        }
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
                $(".gems").each(function () {if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ top: '+=2cm' },speed,
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y + 2;
            }
            else if (reloaded) {
                $('#player').animate({ top: '-=0cm' },speed,
                function () {
                    alert('Dont move out of path')
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
                $(".gems").each(function () {if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ top: '-=2cm' },speed,
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y - 2;
            }
            else if (reloaded) {
                $('#player').animate({ top: '-=0cm' },speed,
                function () {
                    alert('Dont move out of path')
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
                $(".gems").each(function () {if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '+=2cm' },speed,
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x + 2;
            }
            else if (reloaded) {
                $('#player').animate({ top: '-=0cm' },speed,
                    function () {
                    alert('Dont move out of path')
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
                $(".gems").each(function () {if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '-=2cm' },speed,
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x - 2;
            }
            else if (reloaded) {
                $('#player').animate({ top: '-=0cm' },speed,
                    function () {
                    alert('Dont move out of path')
                    window.location.reload();        
                });
                reloaded = false;
                return -1;
            }
        }
    }

/**
 * The function checks if the players code is correct or not. <br>
 * If it is correct then it prints the message and if it is not, it will reload page after 5 second.
 * @param {int} gems_collected number of gems collected and assigned by player.
 */
function check_success(gems_collected){
    if(pos_x == 12 && pos_y == 12 && total_gems == gems_collected){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE, you collected the time stone" + '<br />';
        $("#result").css("color", "green");
    }
    else if(pos_x != 12 || pos_y != 12){
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "Destination not reached";
        $("#result").css("color", "red");
        $("#player").animate({top: "+=0cm"}, function(){
            setTimeout(function(){reloaded = false;location.reload();}, 3000);
        })
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "gems collected not correct" + " total_gems = "+ total_gems;
        $("#result").css("color", "red");
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
    create_arena()
})
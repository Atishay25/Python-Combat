/**
* @file level3.js
* @brief JAVASCRIPT FOR LEVEL 3
* @author Prolific Pythonists
* @date 24-11-2022
*/
///stores the X-coordinate of warrior
var pos_x = 0;
///stores the Y-coordinate of warrior
var pos_y = 0;
///check if reloading was done before or not
var reloaded = true;
///check if arena was of type 1 or 2
var arena_type = 0;
///For the animation speed of the player.
var speed = 500;
///maps speeds in milliseconds to the name corresponding to them.
speed_dict = {250 : "fast", 500 : "medium", "750" : "slow"};
///The element in which we have to show speed.
const speed_show = document.getElementById("speed_");
speed_show.innerHTML = speed_dict[speed];
///The following var stores if info about status of snowman. <br> 0 menas alive <br> 1 means dead.
var snowman_killed = 0;
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
 *This function creates the arena. There is code for two different arena we choose a random numberbetweeen 0 and 1 if number
 is less than 0.5 we choose arena_type 1 else arena_type 2.<br> For sprite of each path we again choose a randon number and if this number is
 greater than 0.6 we add a diamond at that point.
 */
function create_map() {
    total_gems = 0;
    window.dict = {};
    reloaded = true;
    pos_x = 0;
    pos_y = 0;
    snowman_killed = 0;
    var ver = 6;
    var hori = 6;
    var posx = 0;
    var posy = 0;
    var num = Math.random();
    if (num < 0.5) {
        arena_type = 1;
        while (ver != 0) {
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
                    gem.src = "../images/level3/soul.png"
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
            ver = ver - 1;
            elem = document.createElement('div');
            elem.id = 100 * posx + posy;
            elem.className = "path vertical";
            elem.style.left = posx + "cm";
            elem.style.top = posy + "cm";
            posy = posy + 2;
            if (Math.random() > 0.6) {
                gem = document.createElement('img');
                gem.src = "../images/level3/soul.png";
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
            hori = 6;
            posx = posx - 2;
            while (hori != 0) {
                hori = hori - 1;
                elem = document.createElement('div');
                elem.id = 100 * posx + posy;
                elem.className = "path horizontal";
                elem.style.left = posx + "cm";
                elem.style.top = posy + "cm";
                //console.log(posx)
                posx = posx - 2;
                if (Math.random() > 0.6) {
                    gem = document.createElement('img');
                    gem.src = "../images/level3/soul.png"
                    gem.id = 10000 + 100 * (posx + 2) + posy;
                    gem.className = "gems";
                    gem.style.left = posx + 2 + "cm";
                    gem.style.top = posy + "cm";
                    $('#arena').append([gem]);
                    total_gems = total_gems + 1;
                }
                var curr = 100 * (posx + 4) + posy;
                var next = 100 * (posx + 2) + posy;
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
            hori = 6;
            ver = ver - 1;
            posx = posx + 2
            elem = document.createElement('div');
            elem.id = 100 * posx + posy;
            elem.className = "path vertical";
            elem.style.left = posx + "cm";
            elem.style.top = posy + "cm";
            posy = posy + 2;
            if (Math.random() > 0.6) {
                gem = document.createElement('img');
                gem.src = "../images/level3/soul.png";
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
        snowman = document.createElement('img');
                snowman.src = "../images/level3/snowman.png";
                snowman.id = "sm";
                snowman.className = "snowmens";
                snowman.style.left = 1 + "cm";
                snowman.style.top = 12 + "cm";
              	$('#arena').append([snowman]);
    }


    else if(num > 0.5){
        arena_type = 2;
        while (hori != 0) {
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
                    gem.src = "../images/level3/soul.png"
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
            hori = hori - 1;
            elem = document.createElement('div');
            elem.id = 100 * posx + posy;
            elem.className = "path horizontal";
            elem.style.left = posx + "cm";
            elem.style.top = posy + "cm";
            posx = posx + 2;
            if (Math.random() > 0.6) {
                gem = document.createElement('img');
                gem.src = "../images/level3/soul.png";
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
            ver = 6;
            posy = posy - 2;
            while (ver != 0) {
                ver = ver - 1;
                elem = document.createElement('div');
                elem.id = 100 * posx + posy;
                elem.className = "path vertical";
                elem.style.left = posx + "cm";
                elem.style.top = posy + "cm";
                // console.log(posx)
                posy = posy - 2;
                if (Math.random() > 0.6) {
                    gem = document.createElement('img');
                    gem.src = "../images/level3/soul.png"
                    gem.id = 10000 + 100 * (posx) + posy+2;
                    gem.className = "gems";
                    gem.style.left = posx + "cm";
                    gem.style.top = posy + 2+ "cm";
                    $('#arena').append([gem]);
                    total_gems = total_gems + 1;
                }
                var curr = 100 * (posx) + posy + 4;
                var next = 100 * (posx) + posy + 2;
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
            ver = 6;
            hori = hori - 1;
            posy = posy + 2
            elem = document.createElement('div');
            elem.id = 100 * posx + posy;
            elem.className = "path horizontal";
            elem.style.left = posx + "cm";
            elem.style.top = posy + "cm";
            posx = posx + 2;
            if (Math.random() > 0.6) {
                gem = document.createElement('img');
                gem.src = "../images/level3/soul.png";
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

        snowman = document.createElement('img');
        snowman.src = "../images/level3/snowman.png";
        snowman.id = "sm";
        snowman.className = "snowmens";
        snowman.style.left = 12 + "cm";
        snowman.style.top = 1 + "cm";
        $('#arena').append([snowman]);
    }
}
/**
 * Kills the snowman and changes the value of snowman_killed to 1.
 */
function snowman_kill(){
    if((arena_type == 1 && pos_x == 0 && pos_y==12) ||(arena_type == 2 && pos_x == 12 && pos_y ==0)){
        $('#player').animate({left:'-=0cm'},speed,function(){
            var image = $("#sm");
            image.fadeOut('fast', function () {
                image.attr('src', '../images/level3/snowman_dead.png');
                image.fadeIn('fast');
            });
        
        
        });
        snowman_killed = 1;
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
            $('#player').animate({left:'-=0cm'},speed,function(){
                alert('Dont move out of arena')
                window.location.reload();
            
            
            });
            reloaded = false;
            return -1;
        }
    }
    if (r == 2) {
        // var posx_ = parseFloat($('#player').css("top"));
        // var posy_ = parseFloat($('#player').css("left"));
        var id_ = pos_x * 100 + pos_y;
        var next_id = pos_x * 100 + pos_y - 2;
        if (window.dict[id_].includes(next_id)) {
            var found = false;
            $(".gems").each(function () {  if (10000 + next_id == $(this).attr("id")) { found = true; } });
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
            $('#player').animate({left:'-=0cm'},speed,function(){
                alert('Dont move out of arena')
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
            $(".gems").each(function () {  if (10000 + next_id == $(this).attr("id")) { found = true; } });
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
            $('#player').animate({left:'-=0cm'},speed,function(){
                alert('Dont move out of arena')
                window.location.reload();
           
            
            });
            reloaded  = false;
            return -1;
        }
    }
    if (r == 4) {
        var id_ = pos_x * 100 + pos_y;
        var next_id = (pos_x - 2) * 100 + pos_y;
        if (window.dict[id_].includes(next_id)) {
            var found = false;
            $(".gems").each(function () {  if (10000 + next_id == $(this).attr("id")) { found = true; } });
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
            $('#player').animate({left:'-=0cm'},speed,function(){
                alert('Dont move out of arena')
                window.location.reload();
            
            
            });
            reloaded = false;
            return -1;
        }
    }
}
/**
 * This function is used for logger message of success or error.<br> final position of warrior and number of lines is checked in this function
 * to check if user have successfully completed task or not.
 * @param {string} code code written by user as a string. This is used to calculate number of lines
 */
function check_success(code) {
    var lines = code.split("\n");
    count = lines.length;
    if(count > 10){
        var res = document.getElementById('result');
        res.innerHTML = "line limit excedded. count: " +count + '<br />';
        $("#result").css("color", "blue");
        $("#player").animate({top: "+=0cm"}, function(){
            setTimeout(function(){reloaded = false;location.reload();}, 3000);
        })
    }
    
    else if(((arena_type == 1 && pos_x == 0 && pos_y == 12) || (arena_type == 2 && pos_x == 12 && pos_y == 0)) && snowman_killed == 1){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE, you own the Soul stone" + '<br />';
        $("#result").css("color", "green");
    }
    else if(snowman_killed == 0){
        var res = document.getElementById('result');
        res.innerHTML = "TRY AGAIN ..SNOWMAN NOT KILLED" + '<br />';
        $("#result").css("color", "red");
        $("#player").animate({top: "+=0cm"}, function(){
            setTimeout(function(){reloaded = false;location.reload();}, 3000);
        })
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = "TRY AGAIN ..DESTINATION NOT REACHED" + '<br />';
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
function print_stat() {
    (function () {
        var old = console.log;
        var logger = document.getElementById('log');
        // console.clear();
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
            }
            else {
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
        if (String(message).includes("level1/level1.html#__main__")) {
            logger.innerHTML += "error" + '<br />';
        }
        else if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        }
        else {
            logger.innerHTML += message + '<br />'
        }
    }
})();
$(document).ready(function(){
    create_map();
})
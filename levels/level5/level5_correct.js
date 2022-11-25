//gem_id == 50000 means final position reached
//gem_id == 30000 means wrong path taken
//gem_id == 10000 means take above path
//gem_id == 20000 means take below path

/**
 * @file level5.js
 */
var gem_found = [false, false, false, false, false];
var total_gems = 0;
var pos_x = 0;
var pos_y = 0;
var reloaded = true;
var insequence = true;
var id_order = [];
var index = 0;
window.dict = {};

/**
 * @brief lmao function
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
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
 * @brief ADD weapn wala
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
 */
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
/**
 * @brief ADD weapn wala
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
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

/**
 * @brief check
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
 */
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
/**
 * @brief ADD weapn wala
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
                $('#player').animate({ top: '+=2cm' })
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" },
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
                $('#player').animate({ top: '-=2cm' });
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" },
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
                $('#player').animate({ left: '+=2cm' });
                
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" },
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
                $('#player').animate({ left: '-=2cm' });
                
            }
            else if (reloaded) {
                $('#player').animate({ top : "+=0cm" },
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


/**
 * @brief lmao function
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
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
 * @brief ADD weapn wala
 * @param {*} px 
 * @param {*} py 
 * @param {*} n 
 */
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

//gem_id == 50000 means final position reached
//gem_id == 30000 means wrong path taken
//gem_id == 10000 means take above path
//gem_id == 20000 means take below path

var total_gems = 0;
var pos_x = 0;
var pos_y = 14;
var reloaded = true;
window.dict = {};
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
$(document).ready(function () {
    if(Math.random() > 0.5){
        create_map(0, 14, 3, 1);
    }
    else{
        create_map(0, 14, 3, 2);
    }
    
})

change = {
    surface: function (r) {
        if (r == 1) {
            var id_ = pos_x * 100 + pos_y;
            var next_id = pos_x * 100 + pos_y + 2;
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ top: '+=2cm' })
                pos_y = pos_y + 2;
            }
            else if (reloaded) {
                $('#player').animate(function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ top: '-=2cm' });
                pos_y = pos_y - 2;
            }
            else if (reloaded) {
                $('#player').animate(function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ left: '+=2cm' });
                pos_x = pos_x + 2;
            }
            else if (reloaded) {
                $('#player').animate(function(){
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
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $('#player').animate({ left: '-=2cm' });
                pos_x = pos_x - 2;
            }
            else if (reloaded) {
                $('#player').animate(function(){
                    alert("Dont player out of arena");
                    window.location.reload();
                });
                reloaded = false;
                return -1;
            }
        }
    }
}
function check_success(gems_collected){
    if(pos_x == 12 && pos_y == 12 && total_gems == gems_collected){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE" + '<br />';
        $("#result").css("color", "green");
    }
    else if(pos_x != 12 || pos_y != 12){
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "Destination not reached";
        $("#result").css("color", "red");
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = " TRY AGAIN" + '<br />' + "gems collected not correct" + "total_gems = "+ total_gems +"gems_collected : "+ gems_collected;
        $("#result").css("color", "red");
    }
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
function direction(){
    var gem_id1 = 10000 + 100*pos_x + pos_y;
    var gem_id2 = 20000 + 100*pos_x + pos_y;
    var gem_id3 = 30000 + 100*pos_x + pos_y;
    if(JSON.stringify(document.getElementById(gem_id1)) != "null"){return 1;}
    if(JSON.stringify(document.getElementById(gem_id2)) != "null"){return 2;}
    if(JSON.stringify(document.getElementById(gem_id3)) != "null"){return -1;}
}
function check_success(){

    if(pos_x == 16 && (JSON.stringify(document.getElementById(10000 + 100*16 + pos_y)) != "null" || JSON.stringify(document.getElementById(20000 + 100*16 + pos_y)) != "null")){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE" + '<br />';
        $("#result").css("color", "green");
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = "TRY AGAIN" + '<br />' + "You have reached wrong destination";
        $("#result").css("color", "green");
    }
}
// (function () {
//     var old = console.error;
//     var logger = document.getElementById('log');
//     console.error = function (message) {
//         logger.innerHTML += "This is of type " + typeof(message) + '<br />';
        
//         error_msg = s[1].replace("File \"<string>\", ", '')
//         res = document['log']
//         res.innerHTML += error_msg;
//     }
// })();
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    // console.clear();
    console.log = function (message) {
        logger.innerHTML += "This is of type " + typeof(message) + '<br />';
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
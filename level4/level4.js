/**
 * @file level4.js
 */
var total_gems = 0;
var pos_x = 0;
var pos_y = 0;
var reloaded = true;
var snowman_killed = 0;
var arena_type = 0;
$(document).ready(function () {
    total_gems = 0;
    window.dict = {};
    reloaded = true;
    pos_x = 0;
    pos_y = 0;
    var ver = 6;
    var hori = 6;
    var posx = 0;
    var posy = 0;
    var i = 0;
    var num = Math.random();
    if (num < 0.5) {
        arena_type = 1;
        while (ver != 0) {
            i = i + 2
            hori = i;
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
                    gem.src = "../images/diamond.png"
                    gem.id = 10000 + 100 * x + y;
                    gem.className = "gems";
                    gem.style.left = x + "cm";
                    gem.style.top = y + "cm";
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
                gem.src = "../images/diamond.png"
                gem.id = 10000 + 100 * x + y;
                gem.className = "gems";
                gem.style.left = x + "cm";
                gem.style.top = y + "cm";
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
            hori = i;
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
                    gem.src = "../images/diamond.png"
                    gem.id = 10000 + 100 * x + y;
                    gem.className = "gems";
                    gem.style.left = x + "cm";
                    gem.style.top = y + "cm";
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
            //hori = 6;
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
                gem.src = "../images/diamond.png"
                gem.id = 10000 + 100 * x + y;
                gem.className = "gems";
                gem.style.left = x + "cm";
                gem.style.top = y + "cm";
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

    else if(num > 0.5){
        arena_type = 2;
        while (hori != 0) {
            i = i + 2;
            ver = i;
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
                    gem.src = "../images/diamond.png"
                    gem.id = 10000 + 100 * x + y;
                    gem.className = "gems";
                    gem.style.left = x + "cm";
                    gem.style.top = y + "cm";
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
                gem.src = "../images/diamond.png"
                gem.id = 10000 + 100 * x + y;
                gem.className = "gems";
                gem.style.left = x + "cm";
                gem.style.top = y + "cm";
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
            ver = i;
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
                    gem.src = "../images/diamond.png"
                    gem.id = 10000 + 100 * x + y;
                    gem.className = "gems";
                    gem.style.left = x + "cm";
                    gem.style.top = y + "cm";
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
                gem.src = "../images/diamond.png"
                gem.id = 10000 + 100 * x + y;
                gem.className = "gems";
                gem.style.left = x + "cm";
                gem.style.top = y + "cm";
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
})

change = {
    surface: function (r) {
        // console.log(window.dict)
        // console.log("posx : " + pos_x);
        // console.log("posy : " + pos_y);

        if (r == 1) {
            // var posx_ = parseFloat($('#player').css("top"));
            // var posy_ = parseFloat($('#player').css("left"));
            var id_ = pos_x * 100 + pos_y;
            var next_id = pos_x * 100 + pos_y + 2;
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $(".gems").each(function () {if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ top: '+=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y + 2;
            }
            else if (reloaded) {
                $('#player').animate({left:'-=0cm'},function(){
                    alert('Dont player out of arena')
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
                $('#player').animate({ top: '-=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y - 2;
                
            }
            else if (reloaded) {
                $('#player').animate({left:'-=0cm'},function(){
                    alert('Dont player out of arena')
                    window.location.reload();
                
                
                });
                reloaded = false;
                return -1;
            }


            // var s = parseFloat($('#player').css("top"));

            // if(s <= 0){
            //     alert('Dont player out of arena');
            //     window.location.reload();
            //     return -1;
            // }
            // else if(p == 0){
            //     return 0;
            // }
            // else{
            //     $('#player').animate({top: '-=10px'}, function(){change.surface(r,p-1)});
            //     s = s - 10;
            //     console.log($('#player').queue.length)
            // }
        }
        if (r == 3) {
            // var posx_ = parseFloat($('#player').css("top"));
            // var posy_ = parseFloat($('#player').css("left"));
            var id_ = pos_x * 100 + pos_y;
            var next_id = (pos_x + 2) * 100 + pos_y;
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $(".gems").each(function () {  if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '+=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x + 2;
            }
            else if (reloaded) {
                $('#player').animate({left:'-=0cm'},function(){
                    alert('Dont player out of arena')
                    window.location.reload();
               
                
                });
                reloaded  = false;
                return -1;
            }



            // var s = parseFloat($('#player').css("left"));
            // if(s >= 500){
            //     alert('Dont player out of arena');
            //     window.location.reload();
            //     return -1;
            // }
            // else if(p == 0){
            //     return 0;
            // }
            // else{
            //     $('#player').animate({left: '+=10px'}, function(){change.surface(r,p-1)});
            //     s = s + 10;
            //     console.log($('#player').queue.length)
            // }
            // return 0;
        }
        if (r == 4) {
            // var posx_ = parseFloat($('#player').css("top"));
            // var posy_ = parseFloat($('#player').css("left"));
            var id_ = pos_x * 100 + pos_y;
            var next_id = (pos_x - 2) * 100 + pos_y;
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $(".gems").each(function () {  if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '-=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x - 2;
            }
            else if (reloaded) {
                $('#player').animate({left:'-=0cm'},function(){
                    alert('Dont player out of arena')
                    window.location.reload();
                
                
                });
                reloaded = false;
                return -1;
            }

        }
        // if(r == 5){
        //     if((arena_type == 1 && pos_x == 0 && pos_y==12) ||(arena_type == 2 && pos_x == 12 && pos_y ==0)){
        //         $('#player').animate({left:'-=0cm'},function(){
        //             var image = $("#sm");
        //             image.fadeOut('fast', function () {
        //                 image.attr('src', '../images/snowman_dead.png');
        //                 image.fadeIn('fast');
        //             });
                
                
        //         });
        //         snowman_killed = 1;
                
        //         // ,function(){
        //         //     var image = $("#sm");
        //         //     image.fadeOut('fast', function () {
        //         //         image.attr('src', '../images/diamond.png');
        //         //         image.fadeIn('fast');
        //         //     });
                
        //         // });
        //     }
        //     return -1;
        // }
    }
}

/**
 * Return the ratio of the inline text length of the links in an element to
 * the inline text length of the entire element.
 * @file level4.js
 * @param {Node} node - Types or not: either works.
 * @throws {PartyError|Hearty} Multiple types work fine.
 * @returns {Number} Types and descriptions are both supported.
 */
function check_success(code,movement) {
    if (movement == 0){
        return -1;
    }
    var lines = code.split("\n");
    count = lines.length;
    if(count > 10){
        var res = document.getElementById('result');
        res.innerHTML = "line limit excedded. count: " +count + '<br />';
        $("#result").css("color", "blue");
    }
    
    else if(((arena_type == 1 && pos_x == 0 && pos_y == 12) || (arena_type == 2 && pos_x == 12 && pos_y == 0))){
        var res = document.getElementById('result');
        res.innerHTML = "WELL DONE" + '<br />';
        $("#result").css("color", "green");
    }
    else{
        var res = document.getElementById('result');
        res.innerHTML = "TRY AGAIN ..DESTINATION NOT REACHED" + '<br />';
        $("#result").css("color", "red");
    }
}
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
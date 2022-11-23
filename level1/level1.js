var total_gems = 0;
var pos_x = 0;
var pos_y = 0;
var reloaded = true;
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
                    gem.src = "../images/gems.png"
                    gem.id = 10000 + 100 * posx + posy;
                    gem.className = "gems";
                    gem.style.left = posx + "cm";
                    gem.style.top = posy + "cm";
                    $('#arena').append([gem]);
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
                    gem.src = "../images/gems.png";
                    gem.id = 10000 + 100 * posx + posy;
                    gem.className = "gems";
                    gem.style.left = posx + "cm";
                    gem.style.top = posy + "cm";
                    $('#arena').append([gem]);
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
                    gem.src = "../images/gems.png";
                    gem.id = 10000 + 100 * posx + posy;
                    gem.className = "gems";
                    gem.style.left = posx + "cm";
                    gem.style.top = posy + "cm";
                    $('#arena').append([gem]);
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
                    gem.src = "../images/gems.png"
                    gem.id = 10000 + 100 * posx + posy;
                    gem.className = "gems";
                    gem.style.left = posx + "cm";
                    gem.style.top = posy + "cm";
                    $('#arena').append([gem]);
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
    console.log(window.dict)
})

change = {
    surface: function (r) {
        console.log(window.dict)
        console.log("posx : " + pos_x);
        console.log("posy : " + pos_y);

        if (r == 1) {
            // var posx_ = parseFloat($('#player').css("top"));
            // var posy_ = parseFloat($('#player').css("left"));
            var id_ = pos_x * 100 + pos_y;
            var next_id = pos_x * 100 + pos_y + 2;
            if (window.dict[id_].includes(next_id)) {
                var found = false;
                $(".gems").each(function () { console.log($(this).attr("id")); if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ top: '+=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y + 2;
                console.log(found);
            }
            else if (reloaded) {
                alert('Dont player out of arena')
                window.location.reload();
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
                $(".gems").each(function () { console.log($(this).attr("id")); if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ top: '-=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_y = pos_y - 2;
                console.log(found);
            }
            else if (reloaded) {
                alert('Dont player out of arena')
                window.location.reload();
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
                $(".gems").each(function () { console.log($(this).attr("id")); if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '+=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x + 2;
                console.log(found);
            }
            else if (reloaded) {
                alert('Dont player out of arena')
                window.location.reload();
                reloaded = false;
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
                $(".gems").each(function () { console.log($(this).attr("id")); if (10000 + next_id == $(this).attr("id")) { found = true; } });
                $('#player').animate({ left: '-=2cm' },
                    function () {
                        if (found) {
                            gem_ = "#" + (10000 + next_id);
                            $(gem_).css("z-index", "0");
                        }
                    });
                pos_x = pos_x - 2;
                console.log(found);
            }
            else if (reloaded) {
                alert('Dont player out of arena')
                window.location.reload();
                reloaded = false;
                return -1;
            }



            // var s = parseFloat($('#player').css("left"));
            // if(s <= 0){
            //     alert('Dont player out of arena');
            //     window.location.reload();
            //     return -1;
            // }
            // else if(p == 0){
            //     return 0;
            // }
            // else{
            //     $('#player').animate({left: '-=10px'}, function(){change.surface(r,p-1)});
            //     s = s - 10;
            //     console.log($('#player').queue.length)
            // }
            // return 0;
        }
        console.log("posx : " + pos_x);
        console.log("posy : " + pos_y);
    }
}
function check_success(){
    if(pos_x == 13 && pos_y == 13){
        
    }
}
function print_stat(){
    (function () {
        var old = console.log;
        var logger = document.getElementById('log');
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
// (function () {
//     var old = console.error;
//     var logger = document.getElementById('log');
//     console.error = function (message) {
//         logger.innerHTML += "This is of type " + typeof(message) + '<br />';
//         s = 
//         error_msg = s[1].replace("File \"<string>\", ", '')
//         res = document['log']
//         res.innerHTML += error_msg;
//     }
// })();
// (function () {
//     var old = console.log;
//     var logger = document.getElementById('log');
//     console.log = function (message) {
//         logger.innerHTML += "This is of type " + typeof(message) + '<br />';
//         if(String(message).includes("level1/level1.html#__main__")){
//             logger.innerHTML += "error" + '<br />';
//         }
//         else if (typeof message == 'object') {
//             logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
//         }
//         else{
//             logger.innerHTML += message + '<br />'
//         }
//     }
// })();
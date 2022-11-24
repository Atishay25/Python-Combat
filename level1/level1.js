/**
 * @file level1.js
 * @author Atishay Jain (atishay@cse.iitb.ac.in)
 * @brief Header file for Several Data Structures
 * @version 0.1
 * @date 2022-09-25
 * 
 * @copyright Copyright (c) 2022
 * 
 */

var total_gems = 0;
var pos_x = 0;
var pos_y = 0;
var reloaded = true;
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
                        gem.src = "../images/gems.png"
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
                        gem.src = "../images/gems.png";
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
                        gem.src = "../images/gems.png";
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
                        gem.src = "../images/gems.png"
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

$(document).ready(function () {
    create_arena()
})
// $(document).ready(function () {
//     total_gems = 0;
//     window.dict = {};
//     reloaded = true;
//     pos_x = 0;
//     pos_y = 0;
//     var ver = 6;
//     var hori = 6;
//     var posx = 0;
//     var posy = 0;
//     while (ver != 0 || hori != 0) {
//         if (ver == 0) {
//             while (hori != 0) {
//                 hori = hori - 1;
//                 elem = document.createElement('div');
//                 elem.id = 100 * posx + posy;
//                 elem.className = "path horizontal";
//                 elem.style.left = posx + "cm";
//                 elem.style.top = posy + "cm";
//                 posx = posx + 2;
//                 if (Math.random() > 0.6) {
//                     gem = document.createElement('img');
//                     gem.src = "../images/gems.png"
//                     gem.id = 10000 + 100 * posx + posy;
//                     gem.className = "gems";
//                     gem.style.left = posx + "cm";
//                     gem.style.top = posy + "cm";
//                     $('#arena').append([gem]);
//                     total_gems = total_gems + 1;
//                 }
//                 var curr = 100 * (posx - 2) + posy;
//                 var next = 100 * posx + posy;
//                 if (curr in dict) {
//                     dict[curr].push(next);
//                 }
//                 else {
//                     dict[curr] = [next];
//                 }
//                 if (next in dict) {
//                     dict[next].append[curr];
//                 }
//                 else {
//                     dict[next] = [curr];
//                 }
//                 $('#arena').append([elem]);
//             }
//         }
//         else if (hori == 0) {
//             while (ver != 0) {
//                 ver = ver - 1;
//                 elem = document.createElement('div');
//                 elem.id = 100 * posx + posy;
//                 elem.className = "path vertical";
//                 elem.style.left = posx + "cm";
//                 elem.style.top = posy + "cm";
//                 posy = posy + 2;
//                 if (Math.random() > 0.6) {
//                     gem = document.createElement('img');
//                     gem.src = "../images/gems.png";
//                     gem.id = 10000 + 100 * posx + posy;
//                     gem.className = "gems";
//                     gem.style.left = posx + "cm";
//                     gem.style.top = posy + "cm";
//                     $('#arena').append([gem]);
//                     total_gems = total_gems + 1;
//                 }
//                 var curr = 100 * (posx) + posy - 2;
//                 var next = 100 * posx + posy;
//                 if (curr in dict) {
//                     dict[curr].push(next);
//                 }
//                 else {
//                     dict[curr] = [next];
//                 }
//                 if (next in dict) {
//                     dict[next].append[curr];
//                 }
//                 else {
//                     dict[next] = [curr];
//                 }
//                 $('#arena').append([elem]);
                
//             }
//         }
//         else {
//             if (Math.random() < 0.5) {
//                 ver = ver - 1;
//                 elem = document.createElement('div');
//                 elem.id = 100 * posx + posy;
//                 elem.className = "path vertical";
//                 elem.style.left = posx + "cm";
//                 elem.style.top = posy + "cm";
//                 posy = posy + 2;
//                 if (Math.random() > 0.6) {
//                     gem = document.createElement('img');
//                     gem.src = "../images/gems.png";
//                     gem.id = 10000 + 100 * posx + posy;
//                     gem.className = "gems";
//                     gem.style.left = posx + "cm";
//                     gem.style.top = posy + "cm";
//                     $('#arena').append([gem]);
//                     total_gems = total_gems + 1;
//                 }
//                 var curr = 100 * (posx) + posy - 2;
//                 var next = 100 * posx + posy;
//                 if (curr in dict) {
//                     dict[curr].push(next);
//                 }
//                 else {
//                     dict[curr] = [next];
//                 }
//                 if (next in dict) {
//                     dict[next].append[curr];
//                 }
//                 else {
//                     dict[next] = [curr];
//                 }
//                 $('#arena').append([elem]);
//             }
//             else {
//                 hori = hori - 1;
//                 elem = document.createElement('div');
//                 elem.id = 100 * posx + posy;
//                 elem.className = "path horizontal";
//                 elem.style.left = posx + "cm";
//                 elem.style.top = posy + "cm";
//                 posx = posx + 2;
//                 if (Math.random() > 0.6) {
//                     gem = document.createElement('img');
//                     gem.src = "../images/gems.png"
//                     gem.id = 10000 + 100 * posx + posy;
//                     gem.className = "gems";
//                     gem.style.left = posx + "cm";
//                     gem.style.top = posy + "cm";
//                     $('#arena').append([gem]);
//                     total_gems = total_gems + 1;
//                 }
//                 var curr = 100 * (posx - 2) + posy;
//                 var next = 100 * posx + posy;
//                 if (curr in dict) {
//                     dict[curr].push(next);
//                 }
//                 else {
//                     dict[curr] = [next];
//                 }
//                 if (next in dict) {
//                     dict[next].append[curr];
//                 }
//                 else {
//                     dict[next] = [curr];
//                 }
//                 $('#arena').append([elem]);
//             }
//         }
//     }
// })

change = {
    surface: function (r) {
        if (r == 1) {
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
                alert('Dont move out of path')
                window.location.reload();
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
                $('#player').animate({ top: '-=0cm' },
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
                $('#player').animate({ top: '-=0cm' },
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
                $('#player').animate({ top: '-=0cm' },
                    function () {
                    alert('Dont move out of path')
                    window.location.reload();        
                });
                reloaded = false;
                return -1;
            }
        }
    }
}
/**
 * 
 * @param {*} gems_collected 
 */
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
        res.innerHTML = " TRY AGAIN" + '<br />' + "gems collected not correct" + "total_gems = "+ total_gems;
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
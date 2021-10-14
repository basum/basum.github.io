const rot_center_dist = 3.0;
const ceiling_height = 5.0;
const floor_height = 0.0;
const x_limit = 2.0;
const falling_speed = 1.85;
const play_time = 60.0;
const intervalLength = 1000.0 / 60.0;
const ts = intervalLength / 1000.0;
const redirect_page = "/gameover?score=";
const score_reward = +5;
const score_punishment = -5;

var score = 0;
var timer = play_time;

function update_points_and_timer() {
    document.getElementById('points_and_timer').innerHTML
        = 'Score : <b>' + score + "</b>,   Time left : " + Math.ceil(timer) + "s";
}
function get_new_position() {
    
    return {
        x: Math.random() * 2.0 * x_limit - x_limit,
        y: ceiling_height + (Math.random() * 0.25 * ceiling_height - 0.125 * ceiling_height),
        z: Math.random() * 2.0
    };
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

AFRAME.registerComponent('plastic', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_reward;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        if (current_position.y < floor_height) {
            setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
            current_position = get_new_position();
        }
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});

AFRAME.registerComponent('apple', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_punishment;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
        var count = 0
        el.addEventListener('animationcomplete',(event) => {
            if (count%2==0) {
                el.setAttribute('animation', 'property: position; to: 0 0 0; dur:2000; loop: false');
                count++;
            } else {
                el.setAttribute('animation', 'property: position; to: 0 5 0; dur:2000; loop: false')
                count++
            }
            
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
        if (current_position.y < floor_height) current_position = get_new_position();
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});

AFRAME.registerComponent('banana', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_punishment;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
        var count = 0
        el.addEventListener('animationcomplete',(event) => {
            if (count%2==0) {
                el.setAttribute('animation', 'property: position; to: 2 0 0; dur:2000; loop: false');
                count++;
            } else {
                el.setAttribute('animation', 'property: position; to: 2 4 0; dur:2000; loop: false')
                count++
            }
            
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
        if (current_position.y < floor_height) current_position = get_new_position();
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});

AFRAME.registerComponent('watermelon', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_punishment;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
        var count = 0
        el.addEventListener('animationcomplete',(event) => {
            if (count%2==0) {
                el.setAttribute('animation', 'property: position; to: 0 0 2; dur:2000; loop: false');
                count++;
            } else {
                el.setAttribute('animation', 'property: position; to: 0 3 2; dur:2000; loop: false')
                count++
            }
            
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
        if (current_position.y < floor_height) current_position = get_new_position();
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});

AFRAME.registerComponent('grapes', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_punishment;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
        var count = 0
        el.addEventListener('animationcomplete',(event) => {
            if (count%2==0) {
                el.setAttribute('animation', 'property: position; to: 0 0 -2; dur:2000; loop: false');
                count++;
            } else {
                el.setAttribute('animation', 'property: position; to: 0 6 -2; dur:2000; loop: false')
                count++
            }
            
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
        if (current_position.y < floor_height) current_position = get_new_position();
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});


AFRAME.registerComponent('fruit', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            if (timer <= 0.0) return;

            score += score_punishment;
            let new_position = get_new_position();
            el.setAttribute("position", new_position.x + " " + new_position.y + " " + new_position.z);
        };
        el.addEventListener("click", this.on_click);
        el.addEventListener('hitstart',function(e) {
            this.remove();
        })
        var count = 0
        el.addEventListener('animationcomplete',(event) => {
            if (count%2==0) {
                el.setAttribute('animation', 'property: position; to: 0 0 0; dur:2000; loop: false');
                count++;
            } else {
                el.setAttribute('animation', 'property: position; to: 0 5 0; dur:2000; loop: false')
                count++
            }
            
        })
    },
    tick: function () {
        if (timer <= 0.0) return;

        let el = this.el;
        var current_position = el.getAttribute("position");
        // current_position.y -= ts * falling_speed;
        setTimeout(() => {  console.log("Waited for object placements."); }, 1150);
        if (current_position.y < floor_height) current_position = get_new_position();
        el.setAttribute("position", current_position.x + " " + current_position.y + " " + current_position.z);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});


window.onload = () => {

    tick_function = function () {
        timer -= ts;
        update_points_and_timer();
        if (timer <= 0.0) {
            clearInterval(my_interval);
            window.location.href = redirect_page + score;
        }
    };

    var fruits = document.getElementsByClassName("fruit");
    var plastics = document.getElementsByClassName("plastic");

    for (let element of fruits) {
        element.setAttribute('fruit', '');
    }
    for (let element of plastics) {
        element.setAttribute('plastic', '');
    }
    var my_interval = setInterval(tick_function, intervalLength);
}

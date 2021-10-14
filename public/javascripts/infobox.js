const intervalLength = 1000.0 / 60.0;
const ts = intervalLength / 1000.0;

window.onload = () => {

    tick_function = function () {
    };

    var my_interval = setInterval(tick_function, intervalLength);
}

AFRAME.registerComponent('click-to-close', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            el.setAttribute("visible","false");
        };
        el.addEventListener("click", this.on_click);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});
AFRAME.registerComponent('click-to-open', {
    init: function () {
        let el = this.el;
        this.on_click = function () {
            var this_id = el.getAttribute("id");
            var text_id = this_id + "text";
            document.getElementById(text_id).setAttribute("visible","true");
        };
        el.addEventListener("click", this.on_click);
    },
    remove: function () {
        let el = this.el;
        el.removeEventListener("click", this.on_click);
    }
});

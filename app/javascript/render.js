var React  = require("react"),
    outlet = document.getElementById("outlet");

var current,
    renderHistory = [];

function render(component) {
    if(current) {
        renderHistory.push(current);
    }
    current = component;
    React.render(component, outlet);
}

render.previous = function() {
    if(renderHistory.length) {
        render(renderHistory[renderHistory.length-1]);
    }
};

module.exports = render;
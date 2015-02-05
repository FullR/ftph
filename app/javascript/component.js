"use strict";

var _     = require("lodash"),
    React = require("react"),
    slice = [].slice;

function Component(proto) {
    var ReactClass,
        renderMethod;

    renderMethod = proto.render;
    proto.render = function() {
        return renderMethod.call(this, this.props, this.state);
    };

    ReactClass = React.createClass(proto);
    ReactClass.extend = function(newProto) {
        if(newProto.mixins && proto.mixins) {
            newProto.mixins = newProto.mixins.slice();
            newProto.mixins.push.apply(newProto.mixins, proto.mixins);
            newProto.mixins = _.uniq(newProto.mixins);
        }
        return Component(_.extend(_.clone(proto), newProto));
    };

    return ReactClass;
}

module.exports = Component;
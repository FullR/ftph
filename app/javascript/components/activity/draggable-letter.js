var React = require("react");
var dnd = require("react-dnd");

var DraggableLetter = React.createClass({
    mixins: [dnd.DragDropMixin],
    statics: {
        configureDragDrop(register) {
            register("letter", {
                dragSource: {
                    beginDrag(component) {
                        return {
                            item: component.props
                        };
                    }
                }
            });
        }
    },

    render() {
        var dragging = this.getDragState("letter").isDragging;
        var style = {
            display: "inline-block",
            fontSize: 180,
            visibility: dragging ? "hidden" : "visible",
            width: 100,
            margin: "0 5% 0 5%"
        };

        if(this.props.disabled) {
            return (
                <div {...this.props} style={style} className="draggable-letter">{this.props.letter}</div>
            );
        }
        return (
            <div {...this.props} {...this.dragSourceFor("letter")} style={style} className="draggable-letter">{this.props.letter}</div>
        );
    }
});

module.exports = DraggableLetter;

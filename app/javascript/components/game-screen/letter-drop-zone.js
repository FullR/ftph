var React = require("react");
var dnd = require("react-dnd");

var LetterDropZone = React.createClass({
    mixins: [dnd.DragDropMixin],
    statics: {
        configureDragDrop(register) {
            register("letter", {
                dropTarget: {
                    acceptDrop(component, item) {
                        if(component.props.onLetterDrop) {
                            component.props.onLetterDrop(item);
                        }
                    }
                }
            });
        }
    },

    render() {
        return (
            <div {...this.dropTargetFor("letter")} {...this.props}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = LetterDropZone;
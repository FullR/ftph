"use strict";

var React = require("react"),
    $     = require("jquery");

var WordImage = React.createClass({
    /* 
        Fit the image in its container without
        breaking its ratios
    */
    fitElement: function() {
        var self = this,
            $this = $(this.getDOMNode()),
            $parent = $this.parent();

        $this[0].onload = function() {
            var nWidth  = this.naturalWidth,
                nHeight = this.naturalHeight,
                pWidth  = $parent.width(),
                pHeight = $parent.height(),
                wRatio  = (pWidth/nWidth),
                hRatio  = (pHeight/nHeight),
                fWidth,  // final image width
                fHeight, // final image height
                css = {};

            if(wRatio < hRatio) {
                fWidth = pWidth;
                fHeight = nHeight * wRatio;
            }
            else {
                fHeight = pHeight;
                fWidth = nWidth * hRatio;
            }

            css.width = fWidth + "px";
            css.height = fHeight + "px";

            if(!self.props.disableVCenter) {
                css["margin-top"] = ((pHeight / 2) - (fHeight / 2)) + "px";
            }
            if(!self.props.disableHCenter) {
                css["margin-left"] = ((pWidth  / 2) - (fWidth  / 2)) + "px";
            }

            $this.css(css);
        };
    },

    componentDidMount: function() {
        if(!this.props.dontFit) {
            this.fitElement();
        }
    },

    render: function() {
        return (
            <img className="word-image" src={"assets/images/words/"+this.props.word+".png"}/>
        );
    }
});

module.exports = WordImage;
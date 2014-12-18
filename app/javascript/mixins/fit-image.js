"use strict";

var $ = require("jquery");

// Fits and centers an image into it's parent without affecting its ratios
module.exports = {
	fitElement: function() {
		var self = this,
			$this = $(this.getDOMNode()),
			$parent = $this.parent();

		console.log("Fitting");
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
				css["margin-top"] = ((pHeight / 2)  - (fHeight / 2))  + "px";
			}
			if(!self.props.disableHCenter) {
				css["margin-left"] = ((pWidth  / 2)  - (fWidth  / 2))  + "px";
			}

			//$this.width(fWidth);
			//$this.height(fHeight);
			$this.css(css);
		};
	},

	componentDidMount: function() {
		if(!this.props.dontFit) {
			this.fitElement();
		}
	}
};
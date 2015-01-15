"use strict";

var React = require("react"),
    Link = require("components/utility/link");

var ContinueArrow = React.createClass({

    render: function() {
        return (
            <Link className='continue-arrow' to={this.props.to}>
                <div className='continue-arrow-content'>
                    {this.props.children}
                </div>
            </Link>
        );
    }
});

module.exports = ContinueArrow;
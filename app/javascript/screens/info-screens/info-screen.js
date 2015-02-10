var React   = require("react"),
    WebLink = require("components/utility/web-link");

var InfoScreen = React.createClass({
    mixins: [require("mixins/class-names")],

    resizeContent: function() {
        var el           = this.getDOMNode(),
            header       = document.getElementsByClassName("info-screen-header")[0],
            content      = document.getElementsByClassName("info-screen-content")[0],
            footer       = document.getElementsByClassName("info-screen-footer")[0],
            height       = el.offsetHeight,
            headerHeight = header.offsetHeight,
            footerHeight = footer.offsetHeight;

        content.style.height = `${height - headerHeight - footerHeight}px`;
    },

    componentDidMount: function() {
        var _resizeHandler = (() => this.resizeContent());

        document.addEventListener("resize", _resizeHandler)
        this._resizeHandler = _resizeHandler;
    },

    componentWillUnmount: function() {
        if(this._resizeHandler) {
            document.removeEventListener("resize", this._resizeHandler);
            this._resizeHandler = null;
        }
    },

    goHome: function() {
        
    },

    render: function() {
        return (
            <div className={this.classNames("info-screen")}>
                <div className='info-screen-header'>
                    {this.props.header}
                </div>
                <div className='info-screen-content'>
                    {this.props.children}
                </div>
                <div className='info-screen-footer'>
                    <div className='info-box'>
                        &copy; 2014 The Critical Thinking Co.&trade; &#8226; <WebLink href='http://www.criticalthinking.com'>www.CriticalThinking.com</WebLink> &#8226; 800-458-4849
                    </div>
                    <button className='info-back-button' onClick={this.goHome}>Back</button>
                </div>
            </div>
        );
    }
});

module.exports = InfoScreen;
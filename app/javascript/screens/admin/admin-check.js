var React          = require("react"),
    store          = require("storage"),
    Timer          = require("components/timer"),
    resolveSection = require("utility/section-resolver"),
    Admin          = require("screens/admin/admin"),
    render         = require("render");

var AdminCheck = React.createClass({
    getInitialState: function() {
        return {
            password: ""
        };
    },

    updatePassword: function(event) {
        this.setState({
            password: event.target.value
        });
    },

    submit: function(event) {
        var lastLesson = (store.get("lastScreen") || {}).lesson || "1";
        event.preventDefault();

        if(this.state.password === "tea") {
            render(
                <Admin section={this.props.section}/>
            );
        }
        else {
            this.back();
        }
    },

    back: function() {
        render.previous();
    },

    componentDidMount: function() {
        this.refs.passwordInput.getDOMNode().focus();
    },

    render: function() {
        return (
            <div className='admin-check'>
                <p>
                    Enter the first three letters of the word
                    <br/>&quot;<span className='admin-check-tea'>tea</span>cher&quot;<br/>
                    in the box and click Go to enter the Admin/Score screen.
                </p>

                <form onSubmit={this.submit}>
                    <input ref='passwordInput' value={this.state.password} onChange={this.updatePassword} />
                    <button>Go</button>
                </form>

                <div className='admin-check-timer-box'>
                    <Timer seconds={15} onComplete={this.back} />
                </div>
            </div>
        );
    }
});

module.exports = AdminCheck;
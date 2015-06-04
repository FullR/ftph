var React = require("react");
var store = require("storage");
var Timer = require("components/utility/timer");
var resolveSection = require("utility/section-resolver");
var Admin = require("screens/admin/admin");
var render = require("render");

var AdminCheck = React.createClass({
    // Lifecycle methods
    getInitialState() {
        return {
            password: ""
        };
    },

    componentDidMount() {
        this.refs.passwordInput.getDOMNode().focus();
    },

    // Component methods
    back() {
        render.previous();
    },

    submit(event) {
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
    
    updatePassword(event) {
        this.setState({
            password: event.target.value
        });
    },

    // Render methods
    render() {
        return (
            <div className="admin-check">
                <p className="admin-check__instructions">
                    Enter the first three letters of the word
                    <br/>&quot;<span className="admin-check__password-label">tea</span>cher&quot;<br/>
                    in the box and click Go to enter the Admin/Score screen.
                </p>

                <form className="admin-check__input-container" onSubmit={this.submit}>
                    <input className="admin-check__password-input" ref="passwordInput" value={this.state.password} onChange={this.updatePassword} />
                    <button className="admin-check__submit-button">Go</button>
                </form>

                <div className="admin-check__timer-container">
                    <Timer className="admin-check__timer" seconds={15} onComplete={this.back} />
                </div>
            </div>
        );
    }
});

module.exports = AdminCheck;
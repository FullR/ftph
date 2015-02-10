var React      = require("react"),
    InfoScreen = require("components/screens/info-screen"),
    project    = require("../../project");

var Credits = React.createClass({
    render: function() {
        return (
            <InfoScreen className='credits'>
                <h1>Credits</h1>

                <p className='credit-role'>Written by</p>
                <p>Cherie A. Plant</p>

                <p className='credit-role'>Software Created by</p>
                <p>James Meyers</p>

                <p className='credit-role'>Software Edited by</p>
                <p>Patricia Gray</p>
                <p>Abbey Hunt</p>
                <p>Sarah Rigney</p>

                <p className='credit-role'>Graphic Design by</p>
                <p>Scott Slyter</p>

                <p className='credit-role'>Audio by</p>
                <p>Julianna Seldon</p>

                <p className='credit-role'>Recorded &amp; Edited by</p>
                <p>Terry McDonald</p>
                <p>Jesse Spinella</p>

                <br /><br /><br />
                <p>ISBN {project.ISBN}</p>
            </InfoScreen>
        );
    }
});

module.exports = Credits;
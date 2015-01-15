"use strict";

var React      = require("react"),
    InfoScreen = require("components/screens/info-screen"),
    WebLink    = require("components/utility/web-link");

var Product = React.createClass({
    render: function() {
        return (
            <div className='other-product'>
                <div className='other-product-thumbnail'><img src={"assets/images/other-products/"+this.props.src} /></div>
                <div className='other-product-text'>
                    <div className='other-product-header'>
                        <span className='other-product-title'>{this.props.title}</span>&trade;&nbsp;
                        <span className='other-product-grades'>({this.props.grades})</span>
                    </div>
                    <div className='other-product-info'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

var OtherProducts = React.createClass({
    render: function() {
        var header = (<h1>Other Products</h1>);

        return (
            <InfoScreen className='other-products' header={header}>
                <div className='preschool-products'>
                    <h2>Preschool Products</h2>
                    <Product title='Alphabet Song Game' grades="Toddler – Grade 1" src='asg.png'>
                        The easy, fun way to teach the alphabet!  Students learn upper and lowercase letter names and shapes and how to distinguish similar, mirrored, and reverse letters.
                    </Product> <hr />

                    <Product title='Letter Sounds Song and Game' grades="PreK – Grade 1" src='lssg.png'>
                        Students learn letter sounds by singing the Letter Sounds Song™ and playing fun, simple games.  The fast, fun, and effective way to learn phonics!
                    </Product> <hr />

                    <Product title='Vowel Sounds Song and Game' grades="PreK – Grade 2" src='vssg.png'>
                        The fun, easy way to teach long and short vowel sounds!  Students sing the Vowel Sounds Song™ and play games to master short and long vowels.
                    </Product> <hr />

                    <Product title='Fun-Time Phonics!' grades="PreK – Grade 2" src='rtr.png'>
                        <span style={{"fontWeight" : "bold", "width": "100%", "display": "inline-block"}}>The Simplest, Most Effective Way to Learn to Read!</span>
                        These colorful, fun lessons and games use phonemic awareness and phonics to teach early learners to read.  Students listen, think, and speak to master the basics of reading.
                    </Product> <hr />

                    <Product title='Riddle Rabbit' grades="PreK or Grades K – 1" src='rr.png'>
                        This fun, mind-building collection of short, colorful riddles teaches math, logic, letter sounds, and science.  Each colorful riddle requires identification of two or more clues to deduce the answer.  Children love this software and you’ll love what the software does for your children!
                    </Product> <hr />
                </div>

                <div className='software-info'>
                    <img className='left-image' src='assets/images/other-products/left.png'></img>
                    <div className='software-info-text'>
                        <h3>150+ National Award-Winning<br/>Books and Software</h3>
                        <p>For more than 50 years, our fun, award-winning products have helped students of all abilities achieve better grades and higher test scores with highly effective lessons that sharpen the mind as they teach reading, writing, mathematics, science, and history.  We do not teach through drill and memorization or teach to the tests - we empower the mind!</p>
                        <p>We design critical thinking into our products so students must carefully analyze what they are learning.  Deeper analysis produces deeper understanding, which results in better academic performance.  Over time, students who practice critical thinking learn to apply it throughout their education and life.</p>
                        <p className='quote'>“If we teach children everything we know, their knowledge is limited to ours.<br/>If we teach children to think, their knowledge is limitless.”</p>
                        <span className='citation'>- Michael Baker, President</span>
                        <p>The Critical Thinking Co.™ is recommended by <span className='magazine'>Learning® Magazine</span>, <span className='magazine'>The Well-Trained Mind</span>, <span className='magazine'>College Prep Genius</span>, <span className='magazine'>Creative Child Magazine</span>, Dr. Toy, and used by Sylvan Learning® Centers, Club Z In-Home Tutoring, leading U.S. public schools, and gifted and talented programs in 57 countries throughout the world.</p>
                        <p className='guarantee'>We guarantee better grades and higher test scores or your money back.</p>
                        <p>Children love our products and you’ll love what our products do for your child!</p>
                    </div>
                    <img className='right-image' src='assets/images/other-products/right.png'></img>
                </div>
            </InfoScreen>
        );
    }
});

module.exports = OtherProducts;
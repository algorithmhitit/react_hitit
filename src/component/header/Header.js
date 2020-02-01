import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
 
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

function scrollToTop() {
    scroll.scrollToTop();
}
function scrollToBottom() {
    scroll.scrollToBottom();
}
function scrollTo() {
    scroll.scrollTo(100);
}
function scrollMore() {
    scroll.scrollMore(100);
}
function handleSetActive(to) {
    console.log(to);
}

class Header extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        
        scrollSpy.update();
        
    };
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    // render() {
    //     return (
    //         <div>
    //         <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
    //             Test 1
    //         </Link>
    //         <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
    //             Test 2 (delay)
    //         </Link>
    //         <Link className="test6" to="secondInsideContainer" spy={true} smooth={true} duration={500}>
    //             Test 6 (anchor)
    //         </Link>
    //         <Button activeClass="active" className="btn" type="submit" value="Test 2" to="secondInsideContainer" spy={true} smooth={true} offset={50} duration={500} >
    //             Test 2
    //         </Button>
        
    //         <Element name="test1" className="element">
    //             test 1
    //         </Element>
        
    //         <Element name="test2" className="element">
    //             test 2
    //         </Element>
        
    //         <div id="anchor" className="element">
    //             test 6 (anchor)
    //         </div>
        
        
    //         <Link to="firstInsideContainer" containerId="containerElement">
    //             Go to first element inside container
    //         </Link>
        
    //         <Link to="secondInsideContainer" containerId="containerElement">
    //             Go to second element inside container
    //         </Link>
    //         <div className="element" id="containerElement">
    //             <Element name="firstInsideContainer">
    //             first element inside container
    //             </Element>
        
    //             <Element name="secondInsideContainer">
    //             second element inside container
    //             </Element>
    //         </div>
        
    //         <a onClick={this.scrollToTop}>To the top!</a>
    //         <br/>
    //         <a onClick={this.scrollToBottom}>To the bottom!</a>
    //         <br/>
    //         <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
    //         <br/>
    //         <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
    //         </div>
    //     );
    // }
    render() {
        return (
            <>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                HIT-IT HomePage
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="test6" to="homeInsideContainer" spy={true} smooth={true} duration={500}>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link className="test6" to="featuresInsideContainer" spy={true} smooth={true} duration={500}>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Link>
                <Link className="test6" to="photoInsideContainer" spy={true} smooth={true} duration={500}>
                    <Nav.Link href="#pricing">Photo</Nav.Link>
                </Link>
            </Nav>
            </Navbar>
        </>
        );
    }
}

export default Header;
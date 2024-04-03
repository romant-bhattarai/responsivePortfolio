import {useState, useEffect} from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useStae('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []
    )
    return (
    <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div classname="social-icon">
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

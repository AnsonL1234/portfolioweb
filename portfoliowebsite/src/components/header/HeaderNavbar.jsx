import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderNavbar({homePage, portfolio, cv,  title, subMenu, contactMe, search}) {
    return (
        <Nav className="nav nav-underline">
            <Nav.Link as={Link} to="/home">{homePage}</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">{portfolio}</Nav.Link>
            <Nav.Link>{cv}</Nav.Link>
            <NavDropdown title={title}>
                {subMenu.map((item, index) => (
                    <NavDropdown.Item key={index}>{item}</NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link>{contactMe}</Nav.Link>       
            <Nav.Link>{search}</Nav.Link> 
        </Nav>
    );

}
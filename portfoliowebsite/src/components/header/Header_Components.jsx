import { Nav, NavDropdown } from "react-bootstrap";

export default function Header_Components({homePage, portfolio, cv,  title, subMenu, about, contactMe}) {
    return (
        <Nav className="nav nav-underline">
            <Nav.Link className="nav-link">{homePage}</Nav.Link>
            <Nav.Link className="nav-link">{portfolio}</Nav.Link>
            <Nav.Link className="nav-link">{cv}</Nav.Link>
            <NavDropdown title={title}>
                {subMenu.map((item, index) => (
                    <NavDropdown.Item key={index}>{item}</NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link className="nav-link">{contactMe}</Nav.Link>           
        </Nav>
    );

}
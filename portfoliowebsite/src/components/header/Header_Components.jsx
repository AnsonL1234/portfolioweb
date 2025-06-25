import { Nav, NavDropdown } from "react-bootstrap";

export default function Header_Components({homePage, title, subMenu, about, contactMe}) {
    return (
        <Nav className="nav nav-underline">
            <Nav.Link className="nav-link">{homePage}</Nav.Link>
            <NavDropdown title={title}>
                {subMenu.map((item, index) => (
                    <NavDropdown.Item key={index}>{item}</NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link className="nav-link">{about}</Nav.Link>
            <Nav.Link className="nav-link">{contactMe}</Nav.Link>           
        </Nav>
    );

}
import { Nav, NavDropdown } from "react-bootstrap";

export default function Header_Data({homePage, title, subMenu, about, contactMe}) {
    return (
        <Nav className="me-auto">
            <Nav.Link>{homePage}</Nav.Link>
            <NavDropdown title={title}>
                {subMenu.map((item, index) => (
                    <NavDropdown.Item key={index}>{item}</NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link>{about}</Nav.Link>
            <Nav.Link>{contactMe}</Nav.Link>           
        </Nav>
    );

}
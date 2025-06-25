import Header_Components from './Header_Components';
import { headerData } from './headerData';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../image/reactJsLogo.png'
import signInIcon from '../image/user.png'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (
        <header className='bg-dark d-flex align-items-center'>
            <div className='d-flex align-items-center px-3 py-2'>
                    <img src={logo} style={{height: "50px", width: "50px"}}/>
                    <h6 className = "ms-3 mt-2" style={{color: "#61DBFB"}}>REACT | Anson Ling</h6>
            </div>

            <div className="flex-grow-1 d-flex justify-content-center">
                <Navbar data-bs-theme="dark">
                    <Container className="p-0">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Header_Components
                                homePage={headerData.homePage}
                                portfolio={headerData.portfolio}
                                cv={headerData.cv}
                                title={headerData.about.title}
                                subMenu={headerData.about.subMenu}
                                contactMe={headerData.contactMe}
                            />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Nav className="ms-auto" data-bs-theme="dark">
                <div className="d-flex align-items-center">
                    <img src={signInIcon} style={{height: "30px", width: "30px"}} />
                    <NavDropdown
                        title="Sign In"
                        id="about-dropdown"
                        className="about-dropdown"
                        align="end" // Bootstrap v5+ only
                    >
                        <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                        <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
                        <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Nav>

        </header>
    );
}


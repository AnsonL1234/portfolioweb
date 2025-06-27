import Header_Components from './Header_Components';
import { headerData } from './headerData';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../image/reactJsLogo.png'
import signInIcon from '../image/user.png'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (
        <header className="bg-dark d-flex w-100">
            <Navbar collapseOnSelect expand="md" data-bs-theme="dark" className='w-100'>
                <Container fluid>

                    <Navbar.Brand className='d-flex align-items-center justify-content-start px-3 py-2'>
                        <img src={logo} class="react-logo" />
                        <h6 className = "ms-3 mt-2" style={{color: "#61DBFB"}}>REACT | Portfolio Website</h6>
                    </Navbar.Brand>

                    <Navbar.Toggle className='ms-auto me-2'/>
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Header_Components
                            homePage={headerData.homePage}
                            portfolio={headerData.portfolio}
                            cv={headerData.cv}
                            title={headerData.about.title}
                            subMenu={headerData.about.subMenu}
                            contactMe={headerData.contactMe}
                        />
                    </Navbar.Collapse>

                    <Nav data-bs-theme="dark" className='justify-content-end signInNav'>
                        <NavDropdown
                            title= {
                                <>
                                    <img
                                        src={signInIcon}
                                        class="signInLogo"
                                    />
                                    <span className="text-white ms-2" >Sign In</span>
                                </>
                            }
                            id="about-dropdown"
                            className="about-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                            <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
                            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}


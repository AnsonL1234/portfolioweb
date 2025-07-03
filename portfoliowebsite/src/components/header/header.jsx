import HeaderNavbar from './HeaderNavbar';
import { headerData } from './HeaderData';
import { Navbar, Container } from 'react-bootstrap';
import HeaderOffcanvas from './HeaderOffcanvas';
import logo from '../image/reactJsLogo.png'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (
        <header className="bg-dark d-flex w-100">
            <Navbar collapseOnSelect expand="md" data-bs-theme="dark" className='w-100'>              
                <Container fluid>

                    <Navbar.Brand className='d-flex align-items-center justify-content-start px-3 py-2'>
                        <img src={logo} className="react-logo" />
                        <h6 className = "ms-3 mt-2" style={{color: "#61DBFB"}}>REACT | Portfolio Website</h6>
                    </Navbar.Brand>

                    <Navbar.Toggle className='ms-auto me-2'/>
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <HeaderNavbar
                            homePage={headerData.homePage}
                            portfolio={headerData.portfolio}
                            cv={headerData.cv}
                            title={headerData.about.title}
                            subMenu={headerData.about.subMenu}
                            contactMe={headerData.contactMe}
                        />
                    </Navbar.Collapse>
                    <HeaderOffcanvas />
                </Container>
            </Navbar>
        </header>
    );
}


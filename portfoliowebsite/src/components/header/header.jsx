import Header_Data from './Header_Data';
import { headerData } from './headerData';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../image/reactJsLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default function Header() {

    return (
        <header>
            <Navbar className = "NavBar" bg="dark" data-bs-theme="dark">
                <img src={logo} className='logo' />
                
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Header_Data
                            homePage={headerData.homePage}
                            title={headerData.moreInfo.title}
                            subMenu={headerData.moreInfo.subMenu}
                            about={headerData.about}
                            contactMe={headerData.contactMe}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


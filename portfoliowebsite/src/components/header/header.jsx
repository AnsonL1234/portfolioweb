import Header_Components from './Header_Components';
import { headerData } from './headerData';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../image/reactJsLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

    return (
        <header className = 'bg-dark d-flex align-items-center'>
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
                                title={headerData.moreInfo.title}
                                subMenu={headerData.moreInfo.subMenu}
                                about={headerData.about}
                                contactMe={headerData.contactMe}
                            />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}


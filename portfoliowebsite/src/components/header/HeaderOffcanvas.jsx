import React, {useState} from 'react';
import { Offcanvas } from 'react-bootstrap';
import signInIcon from '../image/user.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeaderOffcanvas() {

    const[show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    

    return (
        <>
            <button className="btn btn-outline-primary" type='button' onClick={handleShow}>
                <img src={signInIcon} style={{width: "30px", height: "30px", marginRight: "8px"}} />
                Sign In
            </button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className='py-2'>
                    <Offcanvas.Title>
                        Please choose a option for log in...
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
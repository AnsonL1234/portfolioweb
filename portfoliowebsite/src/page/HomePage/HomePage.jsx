import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    return (
        <div class="toast" role="alert" aria-live='assertive' aria-atomic='true'>
            <div className="toach-header d-flex">
                <strong className="me-auto">Message from developer</strong>
                <small>At 6/29/2025</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label='Close'/>
            </div>
            <div className="toast-body">
                The page is still under develop, we will be meet up soon!
            </div>
        </div>
    );
}
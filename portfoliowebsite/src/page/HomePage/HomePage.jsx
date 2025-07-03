import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage-body">
            <div className="homepage-left">
                <h3>This is homepage left position</h3>
            </div>

            <div className="homepage-right">
                <h3>This is homepage right position</h3>
            </div>
        </div>
    );
}
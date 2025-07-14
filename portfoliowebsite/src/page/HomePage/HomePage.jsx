import HomepageLeftContent from './HomepageLeftContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage-body" id='homepage'>
            <section className="homepage-firstsection bg-dark">
                <HomepageLeftContent />
            </section>
            <section className="homepage-secondsection">

            </section>
        </div>
    );
}
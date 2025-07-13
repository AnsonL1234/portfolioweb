import HomepageLeftContent from './HomepageLeftContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage-body" id='homepage'>
            <section className="homepage-firstsection bg-dark">
                <h2>Welcome to my portfolio web page!</h2>
                <p>My name is Anson Ling Guang Cheng. I'm a Bachelor degree student here in ireland dublin. </p>
                <form action="">
                    <input type="text" placeholder='enter the title and search whatever you like...'/>
                </form>
            </section>
            <section className="homepage-secondsection">

            </section>
        </div>
    );
}
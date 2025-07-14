import './HomePage.css'

const HomepageLeftContent = () => {

    return (
        <div className="homepage-left-content">
            <h2>Welcome to my portfolio web page!</h2>
            <article>
                My name is Anson Ling Guang Cheng. I'm a third years <a href="http://">business computing</a> student at TUDublin. If you wish to know more about me you can use the search bar and link section below find more about me
            </article>
            <form action="">
                <input type="text" placeholder='enter the title and search whatever you like...' />
            </form>
            <div className="link-section">
                <p>Link: <a href="http://">Developer</a> or Find me on: </p>
            </div>
        </div>
    );
}

export default HomepageLeftContent;
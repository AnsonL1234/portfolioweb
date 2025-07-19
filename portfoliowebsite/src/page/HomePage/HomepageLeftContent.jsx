import './HomePage.css'

const HomepageLeftContent = () => {

    return (
        <div className="homepage-left-content">
            <h2>Welcome to my portfolio web page!</h2>
            <article>
                My name is Anson Ling Guang Cheng. I'm a third years <a href="http://" className='link-text'>Business Computing</a> student at <a href="https://www.tudublin.ie/" className='link-text'>TUDublin</a>. If you want to know more about me you can use the search bar or click on the link below for more info!
            </article>
            <form action="">
                <input type="text" placeholder='enter the title and search whatever you like...' />
            </form>
            <div className="link-section">
                <p>Link: <a href="http://" className='link-text'>Developer</a> or Find me on: </p>
            </div>
        </div>
    );
}

export default HomepageLeftContent;
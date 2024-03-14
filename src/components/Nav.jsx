import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <header>
            <h1><Link to="/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>Maggie McCausland</Link></h1>
                {/* <h1>Maggie McCausland</h1> */}
                <nav>
                    <ul>
                        <li><Link to="/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>About Me</Link></li>
                        <li><Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link-active' : 'nav-link'}>Portfolio</Link></li>
                        <li><Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}>Contact</Link></li>
                        <li><Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}>Resume</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Nav;



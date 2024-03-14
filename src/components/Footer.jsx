import gitHubCat from '../assets/github.png';
import linkedIn from '../assets/linkedIn.png';

function Footer() {
    return (
        <footer>
            <div>
            <li><a href="https://github.com/maggiemcc" target="_blank" rel="noreferrer"><img className="footer-apps" src={gitHubCat} alt="github logo" /></a></li>
            <li><a href="https://www.linkedin.com/in/maggiemccausland/" target="_blank" rel="noreferrer"><img className="footer-apps" src={linkedIn} alt="linkedIn logo" /></a></li>
            </div>
            <h6>© Maggie McCausland 2023</h6>
        </footer>
    )
}
export default Footer;
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/welissom"></a>
                    <div className="dsmovie-nav-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
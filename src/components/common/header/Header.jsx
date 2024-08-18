/*import { Link } from "react-router-dom";
import Head from "./Head";
import "./Head.css";
import { useState } from "react";
const Header = () => {

    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "moible-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">All Courses</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Team</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                    <div className='start'>
                        <div className='button'>GET CERTIFICATE</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}

                    </button>
                </nav>
            </header>
        </>
    )
}
export default Header */

import { Link } from "react-router-dom";
import Head from "./Head";
import "./Head.css";
import { useState } from "react";

const Header = () => {
    const [click, setClick] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleMouseEnter = (section) => {
        setActiveSection(section);
    };

    const handleMouseLeave = () => {
        setActiveSection(null);
    };

    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li>
                            <Link
                                to="/"
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                onMouseEnter={() => handleMouseEnter('courseHome')}
                                onMouseLeave={handleMouseLeave}
                            >All Courses</Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                to="/team"
                                onMouseEnter={() => handleMouseEnter('team')}
                                onMouseLeave={handleMouseLeave}
                            >Team</Link>
                        </li>
                        <li>
                            <Link
                                to="/price"
                                onMouseEnter={() => handleMouseEnter('pricing')}
                                onMouseLeave={handleMouseLeave}
                            >Pricing</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onMouseEnter={() => handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeave}
                            >Contact</Link>
                        </li>
                    </ul>
                    <div className='start'>
                        <div className='button'>GET CERTIFICATE</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>

            <div className='content'>
                <section id='home' className={activeSection === 'home' ? 'active highlight' : ''}>
                </section>
                <section id='courseHome' className={activeSection === 'courseHome' ? 'active highlight' : ''}>
                </section>
                <section id='about' className={activeSection === 'about' ? 'active highlight' : ''}>
                </section>
                <section id='team' className={activeSection === 'team' ? 'active highlight' : ''}>
                </section>
                <section id='pricing' className={activeSection === 'pricing' ? 'active highlight' : ''}>
                </section>
                <section id='contact' className={activeSection === 'contact' ? 'active highlight' : ''}>
                </section>
            </div>
        </>
    );
};

export default Header;

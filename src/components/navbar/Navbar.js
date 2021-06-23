import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ImgLogo from '../../images/logo.png';
import ImgFace from '../../images/headerFacebook.png';
import ImgTwit from '../../images/headerTwitter.png';
import './Navbar.css';

const SmoothScroll = () => {
    return(
        <section id="home">
            <div className="navbar-fixed">
                <nav className="white">
                    <div >
                        <div className="nav-wrapper">
                            <AnchorLink href="#" className="brand-logo purple-text left">
                                <img src={ImgLogo} alt="logo" height="60%" width="60%"/>
                            </AnchorLink>
                            <AnchorLink href="#" data-target="mobile-demo" className="sidenav-trigger purple-text right">
                                <i className="material-icons">menu</i>
                            </AnchorLink>
                            <ul className="right hide-on-med-and-down">
                                    <div className="right top">
                                    <img src={ImgFace} alt="facebook" /> &nbsp;&nbsp;
                                    <img src={ImgTwit} alt="twitter" />&nbsp;&nbsp;
                                    </div>
                              
                                <li><AnchorLink href="/home" className="purple-text">Accueil</AnchorLink></li>
                                <li><AnchorLink href="/maladieFabry" className="purple-text">La maladie de Fabry</AnchorLink></li>
                                <li><AnchorLink href="/association" className="purple-text">L'association</AnchorLink></li>
                                <li><AnchorLink href="/actualite" className="purple-text">Actualités</AnchorLink></li>
                                <li><AnchorLink href="/partenaire" className="purple-text">Partenaires et hôpitaux</AnchorLink></li>
                                <li><AnchorLink href="/contact" className="purple-text">Contact</AnchorLink></li>
                                <li><div class="d-grid gap-2 col-6 mx-auto ">
                                    <button class="blue white-text btn" type="button">Rechercher</button>
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><AnchorLink href="/home" className="purple-text">Accueil</AnchorLink></li>
                <li><AnchorLink href="/maladieFabry" className="purple-text">La maladie de Fabry</AnchorLink></li>
                <li><AnchorLink href="/association" className="purple-text">L'association</AnchorLink></li>
                <li><AnchorLink href="/actualite" className="purple-text">Actualités</AnchorLink></li>
                <li><AnchorLink href="/partenaire" className="purple-text">Partenaires et hôpitaux</AnchorLink></li>
                <li><AnchorLink href="/contact" className="purple-text">Contact</AnchorLink></li>
            </ul>
        </section>
    )
}

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}

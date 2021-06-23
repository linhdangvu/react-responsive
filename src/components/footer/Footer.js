import React, { Component } from 'react';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import './Footer.css';
import ImgFace from '../../images/footerFacebook.png';
import ImgTwit from '../../images/footerTwitter.png';
import ImgYout from '../../images/footerYoutube.png';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
             <div className="paddingTable grey darken-3">
                <table className="white-text ">
                    <tr>
                        <th> CONTACT </th>
                        <th> AIDER L'ASSOCIATION </th>
                        <th> ACCÈS RAPIDE </th>
                        <th> NOUS SUIVRE </th>
                    </tr>
                    <tr>
                        <td className="alignHaut">
                        Association de Patient de la Maladie de Fabry
                        <br></br><br></br>
                        21, rue Monge - 21160 MARSANNAY LA COTE<br></br>
                        (Siège Social & Siège Administratif)
                        <br></br><br></br>
                        Téléphone : 06 32 26 25 69
                        <br></br><br></br>
                        Pour toute demande ou question,<br></br>
                        votre contact: Mme Najya BEDREDDINE<br></br><br></br>
                        </td>
                        <td className="alignHaut">
                        Vous pouvez acquérir les cartes de correspondance de l’association.
                        <br></br>
                        Téléchargez le bon de commande en pdf et renvoyez-le nous...
                        <br></br><br></br>
                        Faire un don à l’association
                        <br></br><br></br>
                        Bulletin d’adhésion simple <br></br><br></br>
                        </td>
                        <td className="alignHaut">
                        Vos questions <br></br>
                        Nous contacter
                        </td>
                        <td className="alignHaut">
                            <img src={ImgFace} alt="facebook" /> &nbsp;&nbsp;
                            <img src={ImgTwit} alt="twitter" />&nbsp;&nbsp;
                            <img src={ImgYout} alt="youtube" />&nbsp;&nbsp;
                        </td>
                    </tr>
                </table>
            </div>

            </section>
        )
    }
}

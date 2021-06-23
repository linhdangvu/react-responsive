import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './MaladieFabry.css';
import ImgAPMF from '../../images/apmf.png';

export default class MaladieFabry extends Component {
    render() {
        return (
            <section id="maladieFabry"> 
                    <div class="card">
                        <div class="card-image">
                        <img src={ImgAPMF} alt="Beach" width="100%" height="100%"/>
                        <p class="card-title caption-text purple white-text">
                BIENVENUE SUR L'APMF <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;LE SITE DE L'ASSOCIATION DES PATIENTS DE LA &nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                <b>MALADIE DE FABRY</b>
                    </p>  
                        </div>
                </div>
                
            </section>  
            
        )
    }
}

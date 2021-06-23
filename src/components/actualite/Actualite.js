import React, { Component } from 'react';
import ImgAsso from '../../images/association.png';
import ImgFabry from '../../images/maladieFabry.png';
import ImgTraitement from '../../images/traiement.png';
import ImgCentreREF from '../../images/centreref.png';
import './Actualite.css';

export default class Actualite extends Component {
    render() {
        return (
            <section id="actualite" className="actualite">
                <div class="row">
                    <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={ImgAsso} ALT="ASSOCIATION"/>
                        <span class="card-title blue info">L'ASSOCIATION</span>
                        </div>
                    </div>
                    </div>

                    <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={ImgFabry} ALT="fabry"/>
                        <span class="card-title blue info">LA MALADIE DE FABRY</span>
                        </div>
                    </div>
                    </div>

                    <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={ImgTraitement} ALT="traitement"/>
                        <span class="card-title blue info">TRAITEMENTS</span>
                        </div>
                    </div>
                    </div>

                    <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={ImgCentreREF} ALT="centre ref"/>
                        <span class="card-title blue info">CENTRE DE RÉFÉRENCES</span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

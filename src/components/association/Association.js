import React, { Component } from 'react'
import './Association.css';

export default class Association extends Component {
    render() {
        return (
            <section id="association">
                 <div className="card-panel purple white-text textPadding">
                <b>
                L’Association des Patients de la Maladie de Fabry (APMF) 
                est une association loi 1901 qui a été créée en août 2005. 
                C’est la première association française exclusivement dédiée 
                aux patients de la maladie de Fabry. Elle regroupe des patients 
                et des personnes impliquées dans la maladie de Fabry 
                (familles, conjoints, médecins…). 
                <br></br><br></br>
                Ses objectifs sont de fournir un lieu d’échanges, d’écoute, 
                de soutien et d’informations pour les patients et leur entourage, 
                ainsi que de permettre l’amélioration des connaissances sur la 
                maladie de Fabry.
                </b>
            </div>
            </section>
        )
    }
}

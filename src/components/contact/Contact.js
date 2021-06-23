import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                 <div className="container center-align">
                <h4><b>Prendre contact avec nous</b></h4>
                <div class="row">
                
                    <div class="row">
                        <div class="col s6">
                        <p className="black-text left">Prénom:</p>
                         <textarea ></textarea>
                        </div>
                        <div class="col s6">
                        <p className="black-text left">Nom:</p>
                         <textarea ></textarea>
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col s12">
                        <p className="black-text left">Adresse mail:</p>
                         <textarea ></textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                        <p className="black-text left">Objet:</p>
                         <textarea ></textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                        <p className="black-text left">Message:</p>
                         <textarea className="inscreaseHeight" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="row">
                    <button type="submit" class="btn blue white-text mb-3">Valider</button>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

import React from 'react'
import merantes from '/team/merantes.jpg'
import aynera from '/team/aynera.jpg'
import biaco from '/team/biaco.jpg'
import caballero from '/team/caballero.jpg'
import lansangan from '/team/lansangan.jpg'
import orias from '/team/orias.jpg'
import reyes from '/team/reyes.jpg'

export default function Team() {
    document.title = "Our Team | MATA";
    return (
        <>

            <main id="main">


                <center>
                    <section class="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                        <div class="container">

                            <div class="container">

                                <br /><br /><br /><h1 class="teamheader">The Developers of MATA</h1>

                                <br /><br />
                                <div class="col-lg-5">
                                    <div class="member">
                                        <div class="member-img">
                                            <img src={merantes} class="img-fluid" alt="" />

                                        </div>
                                        <div class="member-info">
                                            <h4>John Vincent Merantes</h4>
                                            <span>Project Manager</span>

                                        </div>
                                    </div>
                                </div> <br /><br />

                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={aynera} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Kj Aynera</h4>
                                                <span>Machine Learning Engineer</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={biaco} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Geoffrey Biaco</h4>
                                                <span>Algorithm and Frontend Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div><br />

                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={caballero} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Edgardo Caballero</h4>
                                                <span>Backend Developer</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={lansangan} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Mark Steven Lansangan</h4>
                                                <span>Frontend Developer/UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div><br />

                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={orias} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Clarence James Orias</h4>
                                                <span>Frontend Developer</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5">
                                        <div class="member">
                                            <div class="member-img">
                                                <img src={reyes} class="img-fluid" alt="" />

                                            </div>
                                            <div class="member-info">
                                                <h4>Brandell Bobby Reyes</h4>
                                                <span>Frontend Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div><br />

                            </div>

                        </div>

                    </section>
                </center>

            </main>
        </>
    )
}

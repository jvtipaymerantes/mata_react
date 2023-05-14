import React from 'react'
import teaser from '/teaser.mp4'
import fireIcon from '/icons8_fire_element_300px.png'
import scale from '/icons8_kitchen_scales_120px.png'
import alarm from '/icons8_alarm_120px.png'
import mataCctv from '/matacctv.png'
import oriasMata from '/oriasmata.png'

export default function Home() {
    document.title = "MATA";
    return (
        <>
            <section id="home" class="hero">
                <div class="hero-content">
                    <br /><br /><br /><br /><br /><br />
                    <h1 style={{marginLeft: 80, position: 'relative', marginRight: 80, zIndex: 3}}><i>Your <span class="highlight">eyes</span> in the fight against fire</i></h1>
                    <p style={{marginLeft: 80, position: 'relative',marginRight: 80, zIndex: 3}} ><i>A comprehensive video surveillance management system that focus on</i></p>
                </div>
                <div class="overlay"></div>
                <video autoPlay muted loop id="bg-video" class="hero" >
                    <source src={teaser} type="video/mp4" />
                </video>
            </section>
            <main>
                <section class="services">
                    <div class="container ">
                        <center>
                            <h2>EMPOWERING SAFETY</h2>
                            <h6>Solutions for a safer enviroment</h6>
                            <br />
                        </center>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                                <div class="icon-box" style={{borderRadius: 10}}>
                                    <img src={fireIcon} class="img-flui" alt="" />
                                    <h4 class="title">Fire Detection</h4>
                                    <p class="description">Stay protected with our cutting-edge Camera Fire Detection feature. Utilizing advanced algorithms, it detects and alerts you of potential fires, ensuring real-time protection for you and your loved ones</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon-box" style={{borderRadius: 10}}>
                                    <img src={scale} class="img-flui" alt="" />
                                    <h4 class="title">Fire Scale</h4>
                                    <p class="description">Our fire scale feature is a method used to quantify the size and severity of a detected fire. This information can then be used to determine the appropriate response, such as notifying the fire department or activating an automatic fire suppression system</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon-box" style={{borderRadius: 10}}>
                                    <img src={alarm} class="img-flui" alt="" />
                                    <h4 class="title">Alarm System</h4>
                                    <p class="description">Protect your home and loved ones with our advanced alarm system feature. Get instant alerts and take action from anywhere with our mobile app. Rest easy knowing your home is secure with our state-of-the-art technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><section class="why-us section-bg">
                <div class="overlay2"></div>
                    <div class="row">
                        <div class="background-image">
                       
                            <br />
                            
                            <h1 class="h1">Merging Technology and your Safety</h1>
                            <div class="container">
                                <div class="left-column">
                                    <br />
                                    <br />
                                    <h3>Mission</h3>
                                    <p style={{letterSpacing: 2, marginLeft: 100, marginRight: 100}}>Our mission is to provide a reliable and effective fire detection system using advanced technology to help prevent loss of life and property.</p>
                                </div>
                                <div class="right-column">
                                    <br />
                                    <br />
                                    <h3>Vision</h3>
                                    <p style={{letterSpacing: 1, marginLeft: 100, marginRight: 100}}>Our vision is to become the leading provider of innovative fire detection solutions through continous research and development, exceptional customer service, and a commitment to safety and reliability. We strive to make a positive impact on society by enhancing the safety and security of communities around the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="image-text-section">
                    <div class="row">
                        <div class="col-md-6" style={{borderLeft: '2in solid #fcf7f7'}}>
                            <img src={mataCctv} alt="Image;img-flui" />
                        </div>
                        <div class="col-md-6">
                            <h2 style={{letterSpacing: 2, fontSize: 32}}>Introducing MATA</h2>
                            <p style={{letterSpacing: 1, marginRight: 160, fontSize: 25}}><br />MATA is an innovative system that specializes in fire detection using advanced algorithms and cutting-edge technology. When a fire is detected, the system immediately alerts the nearest fire station for a quick response. MATA also features an algorithm that can determine the level of the fire based on its size, providing valuable information to firefighters. With its reliable and efficient system, MATA is dedicated to improving fire safety and prevention in various contexts.</p>
                        </div>
                    </div>
                    <div style={{height: 350, textAlign: 'center'}} class="why-us section-bg" >
                        <h1 class="text-light title">
                            <a href='/register' class="fixed-image" style={{width: 250, height: 'auto'}}><img src={oriasMata} alt="Click Me" /></a>
                        </h1>
                    </div>
                </section>
            </main>
        </>
    )
}

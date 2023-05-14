import React from 'react'

export default function About() {
    document.title = "About Us";
    return (
        <>
            <main>
                <section class="breadcrumbs">
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Project</h2>
                            <ol>
                                <li><a href="/Home">Home</a></li>
                                <li>Project</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section class="about" data-aos="fade-up">
                    <div class="container"><br /><br />

                        <div class="row">
                            <div style={{ textAlign: 'center', marginBlock: 1, fontSize: 20 }}>
                                <center><h1>About the Project</h1></center>
                                <center><p style={{ marginLeft: 200, marginRight: 200, wordSpacing: 0 }}>
                                This study presents the development of a CCTV system that integrates fire detection, trespassing detection, and SMS alert features using Convolutional Neural Network (CNN), OpenCV, and Raspberry Pi. The system uses CNN to accurately detect and classify objects in real-time, including potential fires and intruders. OpenCV provides advanced video analysis and processing capabilities for reliable detection and tracking, while Raspberry Pi serves as the core computing platform for efficient and effective data processing. The fire detection feature uses CNN to analyze video footage for signs of smoke and fire, while the trespassing detection feature uses motion detection for detecting unauthorized entry. The system sends an SMS alert to the user's mobile device, providing real-time notification of any critical events. The proposed system offers a comprehensive security solution that ensures the safety and protection of property and personnel.
                            </p></center>
                            <h1>Mission</h1>
                            <center><p class="fst-italic" style={{marginRight:200, marginLeft:200}}>
                                Our mission is to provide a reliable and effective fire detection system using advanced technology to help prevent loss of life and property.
                            </p></center>
                            <ul>
                            </ul>
                            <center><h1>Vision</h1></center>
                            <center><p class="fst-italic" style={{marginLeft:200, marginRight:200}}>
                                Our vision is to become the leading provider of innovative fire detection solutions through continous research and development, exceptional customer service, and a commitment to safety and reliability. We strive to make a positive impact on society by enhancing the safety and security of communities around the world.
                            </p></center>
                        </div>
                    </div>

                </div>
            </section>
        </main >
        </>
    )
}

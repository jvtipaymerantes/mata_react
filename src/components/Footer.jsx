import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="about.html">Project</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="team.html">Team</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    Congressional Rd Ext <br />
                                    Barangay 171, Caloocan, Metro Manila<br />
                                    Philippines <br /><br />
                                </p>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3>MATA</h3>
                                <p>Unleash the full potential of your video analysis with our Motion and Tracking Application. Using Deep Learning and OpenCV, it delivers real-time object detection and tracking with unmatched accuracy and speed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </>
    )
}

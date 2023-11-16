import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className=''>
            <div className='social'>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-youtube"></i>
            </div>
            <div className='footer'>

                <div className='first'>
                    <ol>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                    </ol>
                    <button className='service'>service code</button>

                </div>

                <div className='first'>
                    <ol>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ol>
                </div>
                <div className='first'>
                    <ol>
                        <li>Gift Cards</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                    </ol>
                </div>
                <div className='first'>
                    <ol>
                        <li>Media Centre</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ol>
                </div>
            </div>
            <h6>© 1997-2023 Netflix , Inc.</h6>
        </div>
    )
}

export default Footer
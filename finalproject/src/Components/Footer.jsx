// import React from 'react'
// import '../styles/Footer.css'

// const Footer = () => {
//     return (
//         <section class="footer">
//             <div class="footer-row">
//                 <div class="footer-col">
//                     <h4>Info</h4>
//                     <ul class="links">
//                         <li><a href="#">About Us</a></li>
//                         <li><a href="#">Compressions</a></li>
//                         <li><a href="#">Customers</a></li>
//                         <li><a href="#">Service</a></li>
//                         <li><a href="#">Collection</a></li>
//                     </ul>
//                 </div>
//                 <div class="footer-col">
//                     <h4>About</h4>
//                     <ul class="links">
//                         <li><a href="#">Free Designs</a></li>
//                         <li><a href="#">Latest Designs</a></li>
//                         <li><a href="#">Themes</a></li>
//                         <li><a href="#">Popular Designs</a></li>
//                         <li><a href="#">Art Skills</a></li>
//                         <li><a href="#">New Uploads</a></li>
//                     </ul>
//                 </div>
//                 <div class="footer-col">
//                     <h4>Legal</h4>
//                     <ul class="links">
//                         <li><a href="#">Customer Agreement</a></li>
//                         <li><a href="#">Privacy Policy</a></li>
//                         <li><a href="#">GDPR</a></li>
//                         <li><a href="#">Security</a></li>
//                         <li><a href="#">Testimonials</a></li>
//                         <li><a href="#">Media Kit</a></li>
//                     </ul>
//                 </div>
//                 <div class="footer-col">
//                     <h4>Newsletter</h4>
//                     <p>
//                         Subscribe to our newsletter for a weekly dose
//                         of news, updates, helpful tips, and
//                         exclusive offers.
//                     </p>
//                     <form action="#">
//                         <input type="text" placeholder="Your email" required />
//                             <button type="submit">SUBSCRIBE</button>
//                     </form>
//                     <div class="icons">
//                         <i class="fa-brands fa-facebook-f"></i>
//                         <i class="fa-brands fa-twitter"></i>
//                         <i class="fa-brands fa-linkedin"></i>
//                         <i class="fa-brands fa-github"></i>
//                     </div>
//                 </div>
//             </div>
            
//         </section>
//     )
// }

// export default Footer
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h4>College Info</h4>
                    <ul className="links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Campus Facilities</a></li>
                        <li><a href="#">Admin Office</a></li>
                        <li><a href="#">Hostel Management</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Property Services</h4>
                    <ul className="links">
                        <li><a href="#">Available Properties</a></li>
                        <li><a href="#">Maintenance Requests</a></li>
                        <li><a href="#">Rental Agreements</a></li>
                        <li><a href="#">Move-In Checklist</a></li>
                        <li><a href="#">Rules & Regulations</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul className="links">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Student Housing Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Stay Updated</h4>
                    <p>
                        Subscribe for property updates, maintenance alerts, and campus housing announcements.
                    </p>
                    <form action="#">
                        <input type="email" placeholder="Your college email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-envelope"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './Footer.css';


const Footer = () => {


    return (
        <div className='footer-container'>
        {/* this is for testing purpose */}
            {/* <div class="dummy_page">
                Mobile responsive footer
            </div> */}

            {/* <!-- FOOTER START --> */}
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                  
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                      
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                           
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                            <li>Redeem code</li>
                           
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                        </ul>
                    </div>
                   
                    <div className="clearfix"></div>
                </div>
            </div>
            {/* <!-- END OF FOOTER --> */}

        </div>
    );

}
export default Footer;

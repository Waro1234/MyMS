import React from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">Copyright © {new Date().getFullYear()} My-MS. All rights reserved.<br/>
Copyright © 2010 Nexon. All Images & Content.</div>
                <div className="credits">Owned by My-MS Inc.</div>
                <div className="legal-disclaimer-button">
                    <Link to={{pathname: '/disclaimer'}}>Legal Disclaimer</Link>
                </div>
                <AdSense.Google
  client='ca-pub-8114582001446149'
                />
            </footer>
        );
    }
}

export default Footer;

import React from 'react';
import LastUpdate from '../users/LastUpdate'

const Footer = (props) => (
    <div className="footer">
        <p>Copyright &#169; Blokovi 2018</p>
        <LastUpdate date={new Date(props.currentDate)}/>
    </div>
);
export default Footer;
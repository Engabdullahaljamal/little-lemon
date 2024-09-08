import './Footer.css'
import lemon_logo from './../../assets/images/lemon_logo.png'

import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <div>
                <div class="copy_container">
                    <img src={lemon_logo} alt="" />
                    <span>Copyright Little Lemon </span>
                    <img src={lemon_logo} alt="" />
                </div>

                <p>Developed by Eng Abdullah Aljamal</p>
            </div>
            <div className='contact_footer'>
                <p><FaLocationDot /> 23 Fake Ave, Chicago, IL 60602</p>
                <p> <BsFillTelephoneFill />+1 (012) 345-6789</p>
                <p><MdEmail />info@littlelemon.com</p>
            </div>
            <div>
                <p className='s_m_a'>Social Media Account</p>
                <div className='contact_footer_icon'>

                    <FaFacebook />
                    <FaInstagram />
                    <IoLogoYoutube />
                    <FaXTwitter />
                </div>
            </div>



        </footer>
    )
}

export default Footer
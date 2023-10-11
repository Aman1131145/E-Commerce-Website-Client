import React from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineTwitter,
} from "react-icons/ai";
import Payment from "../../assets/creditcardicons.png";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    function handleClick(e) {
        navigate(`/footer/${e}`);
    }
    return (
        <footer className="Footer">
            <div className="container">
                <div className="content">
                    <div className="footer-left">
                        <h3 className="title">Follow us</h3>
                        <ul className="follow">
                            <li
                                className="hover-link center"
                                onClick={() => handleClick("social-media")}
                            >
                                <AiOutlineInstagram />
                            </li>
                            <li
                                className="hover-link center"
                                onClick={() => handleClick("social-media")}
                            >
                                <AiOutlineFacebook />
                            </li>
                            <li
                                className="hover-link center"
                                onClick={() => handleClick("social-media")}
                            >
                                <AiOutlineTwitter />
                            </li>
                            <li
                                className="hover-link center"
                                onClick={() => handleClick("social-media")}
                            >
                                <AiOutlineMail />
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <h3 className="title">Company</h3>
                        <ul className="company">
                            <li
                                className="hover-link"
                                onClick={() => handleClick("contact-us")}
                            >
                                Contact Us
                            </li>
                            <li
                                className="hover-link"
                                onClick={() => handleClick("privacy-policy")}
                            >
                                Privacy Policy
                            </li>
                            <li
                                className="hover-link"
                                onClick={() => handleClick("return-policy")}
                            >
                                Returns And Exchange Policy
                            </li>
                            <li
                                className="hover-link"
                                onClick={() => handleClick("shipping-policy")}
                            >
                                Shipping Policy
                            </li>
                            <li
                                className="hover-link"
                                onClick={() =>
                                    handleClick("terms-and-conditions")
                                }
                            >
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="subFooter center">
                    <div className="credit-card-img">
                        <img src={Payment} alt="credit card image" />
                    </div>
                    <p>
                        Copyright {new Date().getFullYear()} ©{" "}
                        <strong>Posterz.</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

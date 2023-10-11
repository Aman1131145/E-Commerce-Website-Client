import React, { useState } from "react";
import "./FooterItem.scss";
import { useParams } from "react-router-dom";

function FooterItem() {
    const params = useParams();
    const informations = [
        {
            value: "contact-us",
            title: "Contact Us",
            info: "You can contact us at mishraaman113114@gmail.com",
        },
        {
            value: "social-media",
            title: "We are not live yet.",
            info: "You can contact us at mishraaman113114@gmail.com",
        },
        {
            value: "privacy-policy",
            title: "Privacy Policy",
            info: "We do not take any of your data.",
        },
        {
            value: "return-policy",
            title: "Return and Exchange Policy",
            info: "For return and exchange you have to buy something first and currently you cannot buy anything from here so do not worry about return and exchange",
        },
        {
            value: "shipping-policy",
            title: "Shipping Policy",
            info: "Shipping Policy is needed if we are going to ship you something and you are going to buy something if you are not buying and we are not shipping than there is no need of a shipping policy",
        },
        {
            value: "terms-and-conditions",
            title: "Terms and Conditions",
            info: "It is a fun website and we loved building it the only term and condition is that you enjoy",
        },
    ];
    const index = informations.findIndex(
        (value) => value.value === params.info
    );
    const title = informations[index].title;
    const info = informations[index].info;

    return (
        <div className="FooterItem">
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="info">{info}</p>
            </div>
        </div>
    );
}

export default FooterItem;

import React from "react";
import "./Payments.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function Payments() {
    const params = useParams();
    const status = params.status;
    const dispatch = useDispatch();

    const infoData = {
        success: {
            message: "Your Order has beed placed",
            cta: "Shop More",
            icon: <BsFillCartCheckFill />,
        },
        failed: {
            message: "Payment Failed",
            cta: "Try Again",
            icon: <BiErrorCircle />,
        },
    };

    if (status === "success") {
        dispatch(resetCart());
    }

    const navigate = useNavigate();

    return (
        <div className="Payments">
            <div className="icon">{infoData[status].icon}</div>
            <h2 className="message">{infoData[status].message}</h2>
            <button className="btn-primary" onClick={() => navigate('/')}>{infoData[status].cta}</button>
        </div>
    );
}

export default Payments;

import { TextAlignCenter } from "lucide-react";
import "./sidebarpartTwo.css";
import { useSearchParams } from "next/navigation";

export default function SidebarPartTwo({ name, pass }) {


    return (
        <>
            <div className="MainBox">

                <div className="section-one">
                    <h2 style={{ textAlign: "center", fontSize: "25px" }}>Welcome Back {name}</h2>
                    <h1 className="dashboard-title">My Dashboard</h1>

                    <h2 className="account-title">Account Information</h2>
                    <hr />

                </div>

                <div className="Section-two-main">



                    <div className="Section-two-left">
                        <h2 style={{marginRight:"50px"}}>Contact Information</h2>

                        <ul className="contact-list">
                            <li>Name: {name}</li>
                            <li>password:{pass} </li>
                        </ul>

                        <div className="contact-links">
                            <a className="blue-link" href="#">Edit</a>
                            <a className="blue-link change-password" href="#">
                                Change Password
                            </a>
                        </div>

                    </div>

                    <hr />

                    <div className="Section-two-right">
                        <h1>You aren't subscribed to newsletter</h1>
                        <a className="blue-link" href="#">
                            Edit
                        </a>
                    </div>

                    <hr />

                </div>

                <div className="section-three-main">

                    <div className="section-three-head">

                        <h2>Address Book</h2>

                        <a className="manage-address" href="#">
                            Manage Address
                        </a>

                    </div>

                    <hr />

                    <div className="section-three-content">

                        <div className="section-three-left">

                            <h2 className="billing-title">Default Billing Address</h2>


                            <div className="billing-address-below-text">
                                <p>You have no billing address</p>

                                <p>Do You have  billing address</p>

                                <p>any billing address</p>

                            </div>

                            <a className="blue-link" href="#">
                                Edit
                            </a>


                        </div>

                        <div className="section-three-right" >


                            <h2 className="shipping-title">
                                Default Shipping Address
                            </h2>

                            <div className="shipping-title-below-text">

                                <h3>Account xxxxxxx</h3>
                                <h3>Account absccsd</h3>
                                <h3>Debited absccsd</h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
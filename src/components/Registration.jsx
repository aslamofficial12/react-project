"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./LoginForm.css";
import SubscribeForm from "./SubscribeForm";
import "./LoginForm.css";



export default function LoginForm() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const[confirm,setConfirm]=useState("")
    const [show, setShow] = useState(false);


    function handleShow() {
        setShow(!show);
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !pass) {
            alert("Please fill all fields");
            return;
        }


        if (pass.length < 8) {
            alert("Password must contain at least 8 characters");
            return;
        }


        alert("Login Successfully");
        // router.push( `/success?name=${name}&email=${email}&diabetes=${diabetes}`);
        router.push(`/LoginSuccess?name=${name}&password=${pass}`);

        console.log({
            name,
            password: pass
        });
    }


    return (
        <>
            <div className="form-container">

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>New Customer ? </h1>
                    <p style={{ textAlign: "center" }}>Create An Account</p>


                    <label>First Name</label>

                    <input
                        type="text"
                        placeholder="Enter your  First name"
                        value={name}
                        style={{ borderRadius: "10px", border: "solid 1px grey" }}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Last Name</label>

                    <input
                        type="text"
                        placeholder="Enter your  Last name"
                        value={name}
                        style={{ borderRadius: "10px", border: "solid 1px grey" }}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your  email Address"
                        value={name}
                        style={{ borderRadius: "10px", border: "solid 1px grey" }}
                        onChange={(e) => setName(e.target.value)}
                    />



                    <label>Password</label>


                    <div className="password-box">

                        <input
                            type={show ? "text" : "password"}
                            placeholder="Enter your password"
                            value={pass}
                            style={{ border: "solid 1px grey", borderRadius: "10px" }}
                            onChange={(e) => setPass(e.target.value)}
                        /><span><a href="#" style={{ fontWeight: "10px", fontSize: "10px", color: "#bd9a00", fontStyle: "-moz-initial" }}>forget your password?</a></span>


                        <span
                            className="eye"
                            onClick={handleShow}
                        >
                            {show ? "🙈" : "👁️"}
                        </span>




                    </div>

                    <div className="password-box">

                        <label>Confirm Password</label>

                        <input
                            type={show ? "text" : "password"}
                            placeholder="Enter your confirm password"
                            value={pass}
                            style={{ border: "solid 1px grey", borderRadius: "10px" }}
                            onChange={(e) => setPass(e.target.value)}
                        />


                        <span
                            className="eye"
                            onClick={handleShow}
                        >
                            {show ? "🙈" : "👁️"}
                        </span>


                    </div>


                    <label>Company Name</label>
                    <input
                        type="text"
                        placeholder="Enter your  company Name"
                        value={name}
                        style={{ borderRadius: "10px", border: "solid 1px grey" }}
                        onChange={(e) => setName(e.target.value)}
                    />



                    {/* <div className="db-main"> <label className="db" style={{ display: "inline-block" }}>Diabetes type</label><span className="required" style={{ color: "red", display: "inline-block" }}>*</span></div> */}
                    {/* <input
                        type="text"
                        placeholder="Ent"
                        value={name}
                        style={{ borderRadius: "10px", border: "solid 1px grey" }}
                        onChange={(e) => setName(e.target.value)}
                    /> */}





                    <div className="form-group label">

                        {/* <label>
            Diabetes Type <span>*</span>
          </label> */}

                        <div className="db-main"> <label style={{ display: "inline-block" }}>Diabetes type</label><span className="required" style={{ color: "red", display: "inline-block" }}>*</span></div>

                        <select
                            onChange={(e) => { setDiabetes(e.target.value) }}>

                            <option value="">Please Select</option>

                            <option>Type 1</option>

                            <option>Type 2</option>

                            <option>Gestational Diabetes</option>

                            <option>Other Diabetes</option>

                            <option>Caregiver</option>

                            <option>Healthcare Professional</option>

                        </select>

                    </div>


                    <div className="form-group label">

                        {/* <label>
            Diabetes Type <span>*</span>
          </label> */}




                        <div className="db-main"> <label style={{ display: "inline-block" }}>Diabetes Treatment</label><span className="required" style={{ color: "red", display: "inline-block" }}>*</span></div>

                        <select
                            onChange={(e) => { setDiabetes(e.target.value) }}>

                            <option value="">Please Select</option>

                            <option>Insulin injection</option>

                            <option>Insulin-pump</option>

                            <option>Others</option>



                        </select>


                        <label>Phone Number</label>
                        <input
                            type="number"
                            placeholder="Enter your Phone number"
                            value={name}
                            style={{ borderRadius: "10px", border: "solid 1px grey" }}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>








                    {/* <div className="db-main"> <label style={{ display: "inline-block" }}>How did you hear about </label><span className="required" style={{ color: "red", display: "inline-block" }}>*</span></div>

                        <select
                            onChange={(e) => { setDiabetes(e.target.value) }}>

                            <option value="">Please Select</option>

                            <option>Insulin injection</option>

                            <option>Insulin-pump</option>

                            <option>Others</option>

                          

                        </select>

                    </div> */}











                    <button type="submit" onClick={(handleSubmit)}>
                        Login
                    </button>
                    <hr style={{ color: "grey", margin: "20px" }}></hr>
                    <a href="http://localhost:3000/login" style={{ textAlign: "center" }}>Return to login</a>

                </form>





            </div>



        </>

    );
}
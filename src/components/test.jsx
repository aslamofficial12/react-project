import {useState} from "react"
export default function Test(){
    const[name,setName]=useState("");
     const[password,setPassword]=useState("");
    function validation(){
        setName(e.target.value)
        setPassword(e.target.value)
    }
    return(
<>
<h2>
    user details
    <label>Name : </label>
    <input type="text" value={name}/>

     <label>password : </label>
    <input type="passwords" value={password}/>

    <button onClick={validation}>submit</button>
</h2>
</>
    );
}
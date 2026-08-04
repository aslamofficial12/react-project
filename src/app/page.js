"use client";
import LeftPanel from "../components/LeftPanel";
import MultistepForm from "../components/MultistepForm";
import BasicAuth from "./basic-auth/page";
import Sidebar from "../components/sidebarmyaccount/sidebar";
import Sidebarpart from "../components/sidebarpart/sidebarpartTwo";
import { useSearchParams } from "next/navigation";


export default function Home() {

  const searchParams=useSearchParams();

 const name = searchParams.get("name");
    const pass = searchParams.get("pass");
  return (
    <div className="container">
      

    <div className="left-container" style={{border:"1px solid black",borderRadius:"5px"}}>
      <h2 style={{textAlign:"center" ,marginTop:"30px",marginBottom:"20px" ,fontSize:"28px" }}>My Dashborad</h2>

       <Sidebar />
    </div>

    <div style={{backgroundColor:"#ffffff",width:"90%"}}className="right-container">
        <Sidebarpart name={name} pass={pass} />
    </div>

  
    </div>
  );
}
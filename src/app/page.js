import LeftPanel from "../components/LeftPanel";
import MultistepForm from "../components/MultistepForm";
import BasicAuth from "./basic-auth/page";


export default function Home() {
  return (
    <div className="container">
      
      {/* <MultistepForm />
      <LeftPanel /> */}
      <BasicAuth />
    </div>
  );
}
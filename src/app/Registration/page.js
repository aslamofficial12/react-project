import LeftPanel from "../../components/LeftPanel";
import MultistepForm from "../../components/MultistepForm";
import Header from "../../components/Header/Header";

export default function Registration() {
  return (
    <>
    <Header />
    <div className="container">
     
      <MultistepForm />
      <LeftPanel />
    </div>
    </>
  );
}



import Cinter from "../../components/out/Cinter"
import Navbar from "../../Layout/Navbar";
import Slider from "../../components/slider/Slider";
import Abhoutus from "../../components/out/Abhoutus"
import Team from "../../components/out/Team"
import Gunjan from "../../components/out/Gunjan";
import Process from "../../components/main/Process"
import Footer from "../../Layout/Footer"
import Wel from "../../components/out/Wel";
import EnquiryModal from "./EnquiryPopup";
function Home() {
    return(
        <>

 <Navbar />
<EnquiryModal/>
    
    <Slider/>

<Wel/>

   
<Abhoutus/>
<Cinter/>
<Gunjan/>
<Team/>


 <Process/>
  <Footer/>

  
    



        </>
    )
}
export default Home
import LaparoscopicSurgeries from "../../components/services/Laparoscopic";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import SurgicalPathway from "../../components/services/Surgeries";
 



function LS(){
    return(
        <>
<Navbar/>
<LaparoscopicSurgeries/>
<SurgicalPathway/>

<Footer/>


        </>
    )
}

export  default LS
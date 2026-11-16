import Abhoutus from "../../components/out/Abhoutus";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Gunjan from "../../components/out/Gunjan";
import Healthcare from "../../components/out/Healthcare";



function About() {
    return(
        <>
       <Navbar/>
       <Abhoutus/>
       <div id="doctor-profile" className="scroll-mt-28">
         <Gunjan/>
       </div>
      <Healthcare/>

       





      <Footer/>


        </>
    )
}
export default About
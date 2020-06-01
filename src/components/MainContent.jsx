import React, { useRef } from "react";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const MainContent = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    const scrollTo = (ref) => {
      window.scroll({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    };  

    return(
        <div
            style={{
            backgroundColor: "#FFFFFF",
            color: "white",
            textAlign: "center",
            }}
        >
            <div className="" style={{ position: "fixed", top: "190px", marginLeft: "16px" }}>
                <button className="btn btn-danger mt-3 mr-3" onClick={() => scrollTo(section1Ref)}><small>Información</small></button>
                <br />
                <button className="btn btn-danger mt-3 mr-3" onClick={() => scrollTo(section2Ref)}><small>Experiencia</small></button>
                <br />
                <button className=" btn btn-danger mt-3 mr-3" onClick={() => scrollTo(section3Ref)}><small>Educación</small></button>
            </div>
                <div className="d-flex justify-content-center" ref={section1Ref} style={{ height: "100vh", margin: 0 }}>
                    <Section1 />
                </div>
                <div className="mt-5" ref={section2Ref} style={{ 
                    backgroundColor: "#1f2435",
                    color: "white",
                    fontSize: "1em",
                    lineHeight: "1.75",
                    fontWeight: "400",
                    textAlign: "justify",                        
                    padding: "30px",                    
                    height: "100vh", margin: 0 }}>                    
                    <Section2/>
                </div>
                <div className="mt-5" ref={section3Ref} style={{ height: "100vh", margin: 0}}>                    
                    <Section3/>
                </div>

                <footer class="footer text-center text-white" style={{backgroundColor: "#1f2435"}}>        
              © 2020 Marcos Gómez | Ing. en Sistemas Computacionales.
              <br/>  
              Todos los derechos reservados.              
        </footer>
                
            </div>
    );
}

export default MainContent;
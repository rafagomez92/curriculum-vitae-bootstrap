import React from 'react'

function Section3() {
    return (        
        <div class="container text-dark">
  <div class="row ml-5 mt-5">
    <div class="col-sm">
    <div style={{
                        backgroundColor: "#1f2435",
                        color: "white",
                        fontSize: "1em",
                        lineHeight: "1.75",
                        fontWeight: "400",
                        textAlign: "justify",                        
                        padding: "30px"
                        }}>
                            <div style={{                        
                            fontSize: "1.3em",
                            lineHeight: "1.3",
                            fontWeight: "500",                                                    
                        }} className="mt-2">Instituto Tecnológico de Tuxtla Gutiérrez</div>                        
                        <p className="text-danger text-left"><small>2010-2015</small></p>
                        <p style={{                                                
                        fontSize: "1em",
                        lineHeight: "1.7",
                        fontWeight: "150",
                        textAlign: "left",                        
                        }} className="mt-3">
                          Estudios universitarios de Ingeniería en Sistemas Computacionales (Título profesional, Cédula profesional).
                        </p>
                        
                        </div>
    </div>
    <div class="col-sm">
    <div style={{
                        backgroundColor: "#1f2435",
                        color: "white",
                        fontSize: "1em",
                        lineHeight: "1.75",
                        fontWeight: "400",
                        textAlign: "justify",                        
                        padding: "30px"
                        }} >
                            <div style={{                        
                            fontSize: "1.3em",
                            lineHeight: "1.3",
                            fontWeight: "500",                                                    
                        }} className="mt-2">Bootcamp CeroUno</div>                        
                        <p className="text-danger text-left"><small>Enero-Abril 2020</small></p>
                        <p style={{                                                
                        fontSize: "1em",
                        lineHeight: "1.7",
                        fontWeight: "150",
                        textAlign: "justify",                        
                        }} className="mt-3">
                        Fullstack Web Development en JavaScript <br />HTML, CSS, JavaScript, React
                        </p>
                        
                        </div>
    </div>    
  </div>
  <div className="row ml-5 justify-content-center mt-3">
      <div className="col-4 mt-5" style={{backgroundColor: "#1f2435"}}>
      <h3 className="text-white mt-2 border-bottom">Idiomas</h3>
                        <h4 style={{                                                
                        fontSize: "1em",
                        lineHeight: "1.7",
                        fontWeight: "150",
                        textAlign: "left",                        
                        }} className="mt-3 text-white">                           
                          Español
                          <br />
                          Inglés - Intermedio
                        </h4>
      </div>
  </div>
  <div className="text-center ml-5 text-bottom mt-5">
            {/* <button className="bg-primary text-white text-center mb-4">Descargar CV</button>             */}
            <a href="/CV-MarcosGomez.pdf" download="CurriculumVitae-MarcosGómez" className="btn btn-danger text-white text-center mt-5">
                Descargar CV
            </a>
        </div>
        

        
</div>

        
    )
}

export default Section3;

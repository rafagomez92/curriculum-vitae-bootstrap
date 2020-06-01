import React from 'react'

function Section1() {
    return (
        <div className="container my-5 mx-5">
            <div class="row justify-content-center">
                <div className="shadow">
                    <img src="./rafa.jpg" width="380px" alt="..." />
                </div>
                <div style={{
                        backgroundColor: "#1f2435",
                        color: "white",
                        fontSize: "1em",
                        lineHeight: "1.75",
                        fontWeight: "400",
                        textAlign: "justify",                        
                        padding: "40px"
                        }}
                    className="col-xl-6 col-md-6 col-md-4 shadow">
                    <div className="container shadow">                    
                        <div style={{                        
                            fontSize: "3em",
                            lineHeight: "1",
                            fontWeight: "500",
                            textAlign: "justify",                        
                        }} className="mt-5">Marcos Gómez</div>                        
                        <p className="text-danger text-right"><small>gomez92rafael@gmail.com</small></p>
                        <p style={{                                                
                        fontSize: "1em",
                        lineHeight: "1.75",
                        fontWeight: "400",
                        textAlign: "justify",                        
                        }} className="mt-3">
                        Dentro de mi experiencia profesional en el sector TI 
                        he laborado como DBA en las oficinas de DXC en 
                        Guadalajara trabajando para clientes como son 
                        Televisa, Aeroméxico y Mabe. Actualmente me he 
                        preparado a través del Bootcamp de CeroUno para 
                        incursionar en el área de desarrollo con especialidad 
                        en Front-end.
                        </p>
                        <div className="mt-4">
                        <ul style={{ 
                            display: "flex",
                            listStyle: "none", 
                            marginLeft: "-2.5rem"
                        }}>
                        <li>                                                
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rafagomez92" className="text-white mr-5">
                                <img src="https://img.icons8.com/color/48/000000/github--v1.png" width="40px" height="40px" alt=""/>
                            </a>
                        </li>
                        <li>                        
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/rafaelgomez92" className="mr-5 text-white ml-1">
                                <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" width="40px" height="40px" alt=""/>
                            </a>
                        </li>
                        <li>                            
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/markoz_11" className="text-white mr-5">
                            <img src="https://img.icons8.com/color/48/000000/twitter.png" width="40px" height="40px" alt=""/>
                            </a>                            
                        </li>
                        <li>                            
                        <a href="tel:+5219612618566" className="mr-5">                            
                            <img src="https://img.icons8.com/fluent/48/000000/phone.png" width="35px" height="35px" alt="..."/>
                        </a>

                        </li>
                        </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;
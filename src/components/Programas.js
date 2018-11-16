 import React from 'react';
 import {  Row, Col}  from 'reactstrap';

    function RenderMenuItem({ programa }) {
        return(
            <Row className="mt-4"> 
                <Col md="6">
                    <img className="img img-fluid" src={programa.image} alt={programa.title} />
                </Col>
                        
                <div style={programa} className="text-white lead col-md-6 card">  
                            
                    <h3>{programa.title}</h3> 
                    <h3>{programa.horario}</h3>
                    <h5>{programa.conductor}</h5>
                    <p>{programa.descriptions}</p>
                            
                </div>  
            </Row>
        );
    }

     const Programas = (props) => {

        const menu = props.programas.map((programa) => {
            return (
                    <div key={programa.id} className="mt-4"> 
                        <RenderMenuItem programa={programa} />
                    </div>
                
              )
         });    
                                           
    return(
        <div className="container">
            <div>
                  {menu}
            </div>
        </div>
    );
    }

    export default Programas;
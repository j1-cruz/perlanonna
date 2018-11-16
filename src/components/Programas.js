 import React from 'react';
 import {  Row, Col}  from 'reactstrap';

    function RenderMenuItem({ programa }) {
        return(
            <Row className="mt-4 bg-dblack no-gutters"> 
                <Col md="6">
                    <img className="img-fluid" src={programa.image} alt={programa.title} />
                </Col>
                        
                <Col md="6" style={programa} className="text-white lead card">  
                    <div clasName="container mr-2">        
                    <h3>{programa.title}</h3> 
                    <h3>{programa.horario}</h3>
                    <h5>{programa.conductor}</h5>
                    <p>{programa.descriptions}</p>
                    </div>
                </Col>  
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
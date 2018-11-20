 import React from 'react';
 import {  Row, Col }  from 'reactstrap';
 import Buttons from './Buttons'; 

    function RenderMenuItem({ programa }) {
        return(
            <Row className="mt-4 bg-dblack no-gutters"> 
                <Col md="6">
                    <img className="img-fluid" src={programa.image} alt={programa.title} />
                </Col>
                        
                <Col md="6" style={programa} className="text-white card">  
                    <div clasName="container mr-2">        
                    <h3>{programa.title}</h3> 
                    <h3>{programa.horario}</h3>
                    <h4>{programa.conductor}</h4>
                    <h5>{programa.descriptions}</h5>
                    <h6>{programa.operador}</h6>
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
        <div>
                <Buttons />
                {menu}
        </div>
    );
    }

    export default Programas;
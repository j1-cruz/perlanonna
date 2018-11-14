 import React, { Component} from 'react';
 import {  Row, Col, Card}  from 'reactstrap';

 export default class Header extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        }
    }
    
    render(){
        const programas = this.props.programas.map((programa) => {
            return (
                    <Row key={programa.id} className="mt-4"> 
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
                
              )
         });    
                                           
    return(
        <div className="container">
            <div>
                  {programas}
            </div>
        </div>
    );
    }
}
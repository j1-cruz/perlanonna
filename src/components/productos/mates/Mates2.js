import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row,
       Modal, ModalHeader, Button } from 'reactstrap';

import { MATES } from './mates.js';

export default class Mates extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          mates: MATES,
          isModalOpen: false,
          selecModal: null
      };
        
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    onModal(mates){
        this.setState({
            selecModal: mates
        })
    }
    
    toggleModal(mates) {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    
     renderModal(mates){ 
         if (mates != null)
            return(
              <Modal className="modal-lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    <Row>
                        <Col>
                            <CardImg width="100%" src={mates.image} alt={mates.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={mates.image2} alt={mates.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={mates.image3} alt={mates.title} />
                        </Col>
                    </Row>
                 </ModalHeader>
               </Modal>
              
            ) 
    }
    
            
    render(){
        
    const mate = this.state.mates.map((mates) => {
        return (
         <div key={mates.id} className="col-12 col-md-4">
           <Col className="mt-2">
             <Card onClick={() => this.onModal(mates)}>
              <CardBody>
               <CardTitle onClick={this.toggleModal}>{mates.title}</CardTitle>
              </CardBody>
              <CardImg width="100%" src={mates.image} alt={mates.title} />
              <CardBody>
               <CardText>{mates.description}</CardText>
                 <Button outline color="primary" onClick={this.toggleModal}>perfiles</Button>
                </CardBody>
               </Card>
              </Col>
          </div>
        );
     });
        
 
        
    return (
        
        <div className="row">
             {mate}
             {this.renderModal(this.state.selecModal)}
        </div>
        
    );       
  }
}
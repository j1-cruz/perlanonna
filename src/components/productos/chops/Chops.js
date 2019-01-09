import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row,
       Modal, ModalHeader, Button } from 'reactstrap';

import { CHOPS } from './chops.js';

export default class Mates extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          chops: CHOPS,
          isModalOpen: false,
          selecModal: null
      };
        
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    onModal(chops){
        this.setState({
            selecModal: tazas
        })
    }
    
    toggleModal(chops) {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    
     renderModal(chops){ 
         if (tazas != null)
            return(
              <Modal className="modal-lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    <Row>
                        <Col>
                            <CardImg width="100%" src={tazas.image} alt={tazas.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={tazas.image2} alt={tazas.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={tazas.image3} alt={tazas.title} />
                        </Col>
                    </Row>
                 </ModalHeader>
               </Modal>
              
            ) 
    }
    
            
    render(){
        
    const taza = this.state.tazas.map((tazas) => {
        return (
         <div key={tazas.id} className="col-12 col-md-4">
           <Col className="mt-2">
             <Card onClick={() => this.onModal(tazas)}>
              <CardBody>
               <CardTitle onClick={this.toggleModal}>{tazas.title}</CardTitle>
              </CardBody>
              <CardImg width="100%" src={tazas.image} alt={tazas.title} />
              <CardBody>
               <CardText>{tazas.description}</CardText>
                 <Button outline color="primary" onClick={this.toggleModal}>perfiles</Button>
                </CardBody>
               </Card>
              </Col>
          </div>
        );
     });
        
 
        
    return (
        
        <div className="row">
             {taza}
             {this.renderModal(this.state.selecModal)}
        </div>
        
    );       
  }
}
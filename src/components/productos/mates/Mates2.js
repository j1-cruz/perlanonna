import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Col, Row,
       Modal, ModalHeader, Button } from 'reactstrap';

import { MATES } from './mates.js';

export default class Mates extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          product: MATES,
          isModalOpen: false,
          selecModal: null
      };
        
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    onModal(product){
        this.setState({
            selecModal: product
        })
    }
    
    toggleModal(product) {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    
     renderModal(product){ 
         if (product != null)
            return(
              <Modal className="modal-lg d-blok" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    <Row className="d-block d-sm-flex">
                        <Col>
                            <CardImg width="100%" src={product.image} alt={product.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={product.image2} alt={product.title} />
                        </Col>
                        <Col>
                            <CardImg width="100%" src={product.image3} alt={product.title} />
                        </Col>
                    </Row>
                 </ModalHeader>
               </Modal>
              
            ) 
    }
    
            
    render(){
        
    const producto = this.state.product.map((product) => {
        return (
         <div key={product.id} className="col-12 col-md-4">
           <Col className="mt-2">
             <Card onClick={() => this.onModal(product)}>
              <CardBody>
               <CardTitle onClick={this.toggleModal}>{product.title}</CardTitle>
              </CardBody>
              <CardImg width="100%" src={product.image} alt={product.title} />
              <CardBody>
               <CardText>{product.description}</CardText>
                 <Button outline color="primary" onClick={this.toggleModal}>perfiles</Button>
                </CardBody>
               </Card>
              </Col>
          </div>
        );
     });
        
 
        
    return (
        
        <div className="row">
             {producto}
             {this.renderModal(this.state.selecModal)}
        </div>
        
    );       
  }
}
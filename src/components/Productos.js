import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
        CardTitle, Col } from 'reactstrap';

      const RenderProductos = ({productos}) => {
          return (
            <Col className="mt-2">
             <Card>
              <CardBody>
               <CardTitle href={productos.link}>{productos.title}</CardTitle>
              </CardBody>
              <CardImg width="100%" src={productos.image} alt={productos.title} />
              <CardBody>
               <CardText>{productos.description}</CardText>
                 <CardLink href={productos.link}>
                  ver mas
                 </CardLink>
                </CardBody>
               </Card>
              </Col>
          )
      }
        
      const Productos = ({productos}) => {
        const producto = productos.map((productos) => {
          return (
           <div key={productos.id} className="col-12 col-md-4">
             <RenderProductos productos={productos}/>
          </div>
          );
       });
          
      return(
          <div className="row">
              {producto}
          </div>   
      ); 
      }

      export default Productos;

       

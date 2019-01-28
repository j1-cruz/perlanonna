import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
        CardTitle, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';        

      const RenderProductos = ({productos}) => {
          return (
            <Col className="mt-2">
             <Card>
              <CardBody>
              <NavLink to={productos.link}>
                <CardTitle>{productos.title}</CardTitle>
               </NavLink>
              </CardBody>
              <NavLink to={productos.link}>
              <CardImg width="100%" src={productos.image} alt={productos.title} />
              </NavLink>
              <CardBody>
               <CardText>{productos.description}</CardText>
                 <NavLink to={productos.link}>
                  ver mas
                 </NavLink>
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

       

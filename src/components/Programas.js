//Dependencis
import React from 'react';
import { Row, Col } from 'reactstrap';

//Componentes
import Buttons from './Buttons.js';
import './App.css';

export default () => (
	<div>
        <Buttons />
        <hr />
    
        <Row id="de7a8" className="bg-brown borderprogram">
          <Col md="6">
            <h2 className="text-white ml-2 mt-2">"De 7 a 8"</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 7.00hs a 8.00hs</h4>
				<h5 className="text-white ml-2 rubik"> Empezas tu día y          Martín junto al Gallego,
				 en una hora de programación te informan y debaten de los
				 acontecimientos locales y nacionales. Un programa con una
				 jugosa editorial política realizada por ambos conductores del
				 ciclo.
				</h5>
                
				<li className="text-white ml-2">Conductore: Martín García y José Calvo</li>
				<li className="text-white ml-2">Operación técnica: Luciano Ocaño</li>
                
          </Col>
          <Col md="6">
            <img className="img-fluid" src="assets/images/programas/de7a8.jpg" alt="Img de7a8" />
          </Col>
        </Row>

        
        <Row id="radiomovil" className="bg-coral mt-2 borderprogram">
          <Col md="6" className="order-md-2">
            <h2 className="text-white mt-2 ml-2"> Radio Móvil </h2>
				<h4 className="text-white ml-2">Lunes a viernes de 8.00hs a 13.00hs</h4>
                <h5 className="lead text-white ml-2">Radio Móvil es el programa central de nuestra emisora,
				con 5hs diarias donde te informamos a nivel nacional, provincial y local de lo que acontece.
				Música, información, entrevistas, columnas semanales de interés general y un móvil
				desde exteriores en constante contacto con la calle son la clave del éxito de este programa
				con 30 años al aire.</h5>
				<li className="text-white ml-2">Conductor: Mauricio Garcia. Móvil de exteriores: Leonardo Ledesma. Operacion técnica: Luciano Ocaño</li>
          </Col>
          <Col className="order-md-1">
            <img className="img-fluid"  src="assets/images/programas/mic.jpg" alt="img RM" />
          </Col>
        </Row>



		<Row id="tophits" className="bg-primary mt-2 borderprogram">
            <Col md="6">
            <h2 className="text-white ml-2 mt-2">Top Hits</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 13.00hs a 14.30hs</h4>
				<h5 className="text-white ml-2">
				La actualidad músical la encontrás acá. Pop internacional, reggaeton, latinos y todo lo que se esta escuchando. Lanzamientos con lujo de detalles de cada canción y artista. Una buena compañía musical en tus tardes.
				</h5>
				<p className="text-white ml-2">Conductora: Natalia Ferlaino</p>
          </Col>
          <Col md="6">
            <img className="img-fluid d-lg-none"
                src="assets/images/programas/top.jpg" alt="img La100" />
            <img className="d-none d-lg-flex"                           src="assets/images/programas/top.jpg" height={300} width={490} alt="tophits" />
          </Col>
        </Row>


		<Row id="elexpresso" className="bg-burlywood mt-2 borderprogram">
            <Col md="6" className="order-md-2">
                <h2 className="text-white ml-2">El Expreso</h2>
                <h4 className="text-white ml-2">Lunes a viernes de 14.30hs a 16.00hs</h4>
                <p className="text-white ml-2">
                    Recorremos el universo del sonido con vos y te invitamos a realizar un viaje por la música del mundo, en un recorrido por el tiempo y el espacio con los mejores sonidos del planeta. Ricardo Martínez Puente es nuestro guía conduciendo una exquisita y variada selección musical, la data para que te enteres paso a paso de lo que ocurre con los grupos o solistas más importantes, además de las noticias más curiosas del mundo. La cita está hecha, solo falta que vos te subas al expreso.
                </p>
            </Col>
            <Col  md="6">
                <img className="img-fluid"  src="assets/images/programas/elexpresso.jpeg" alt="expreso" />
            </Col>
		</Row>


		<Row id="sincassette" className="bg-chocolate mt-2 borderprogram">
            <Col  md="6">
            <h2 className="text-white ml-2 mt-2">Sin Cassette</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 16.00hs a 18.00hs</h4>
				<h5 className="text-white ml-2">
				Apuntamos a lo que el nombre indica, sacarse el cassette a
				la hora de acompañarte. Sin estructura, mucha música,
				informaciones locales, juegos e interacción con la audiencia
				de forma diaria, todo esto comprimido en 2hs hacen que el
				dinamismo sea constante para vos que tu tarde sea mas liviana.
				</h5>
				<p className="text-white ml-2">Conductor y operacion tecnica: Facundo Membrilla</p>
            </Col>
          <Col md="6">
            <img className="img-fluid d-lg-none"
            src="assets/images/programas/cassette.jpg" alt="sincassette" />
            <img height={300} width={490}
                className="d-none d-lg-flex"
                src="assets/images/programas/cassette.jpg" alt="sincassette" />
          </Col>
        </Row>

				

        <Row id="encompania" className="bg-cadetblue mt-2 borderprogram">
			<Col md="6" className="order-md-2">
				<h2 className="text-white mt-2 ml-2">En Compania</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 18:30 a 20hs</h4>
				<h6 className="lead text-white ml-2">
					Cae la tarde y llegamos para acompañarte e invitarte a reflexionar
					junto a nosotros. Un programa basado en textos y audios de consejos
					para vivir mejor es lo que traemos, sumado a la sabiduría y
					sensibilidad de quien la conduce.
				</h6>
				<li className="text-white ml-2"> Conductora: María del Carmen Laria</li>
                <li className="text-white ml-2"> Operacíon técnica: Facundo Membrilla</li>
			</Col>
			<Col md="6" className="order-md-1">
				<img className="img-fluid"  src="assets/images/programas/encompañia.jpg" alt="encompañia" />
			</Col>
        </Row>

			

		<Row id="fm100" className="bg-darckgoldenrod mt-2 borderprogram">
            <Col md="6">
                <h2 className="text-white mt-2 ml-2">La 100</h2>
					<h4 className="text-white ml-2">Lunes a viernes de 20:00 a 07:00 hs</h4>
					<h5 className="text-white ml-2">Luego de una larga jornada de programacion local, nos anexamos directamente con toda la programación de la FM más importante de todo el país.</h5>
          </Col>
          <Col md="6">
            <img height={300} width={490} 
            className="d-none d-lg-flex"
            src="assets/images/programas/fm100.jpg" alt="img La100" />
            <img
            className="img-fluid d-block d-lg-none"
            src="assets/images/programas/fm100.jpg" alt="img La100" />
          </Col>
      </Row>
    
        <Row id="manosalaobra" className="bg-2 mt-2 borderprogram">
		      <Col md="6" className="order-md-2">
		        <h2 className="text-white mt-2 ml-2">Manos a la obra</h2>
				    <h4 className="text-white ml-2">Sábados de 9:30hs a 10:30hs
                    </h4>
				    <h5 className="text-white ml-2">Editorial y
				    pensamiento es lo que manos a la obra te trae, reflexión en
				    vivo junto a entrevistados de la situación politica y cultural
				    actual.
				    </h5>
                        <li className="ml-2 text-white">Conducción: Fransisco Álvarez de Toledo</li>
                        <li className="ml-2 text-white">Operación técnica: Santiago Brescia</li>
		      </Col>
		      <Col md="6" className="order-md-1">
		          <img src="assets/images/programas/manosalaobra.jpg" className="img-fluid"  alt="manosalaobra" />
		      </Col>
		    </Row>
    
        <Row id="hablandoclaro" className="bg-3 mt-2 borderprogram">
		  <Col className="col-md-6">
		      <h2 className="text-white mt-2 ml-1"> Hablando claro </h2>
                <h4 className="text-white ml-1"> Sábado 10:30hs a 12:00hs
				</h4>
				<h5 className="text-white ml-1">
				    El programa político por excelencia de nuestra emisora,
				    más de 30 años de aire consecutivo avalan nuestro trabajo.
				    Entrevistados, columnas y editoriales con la seriedad que
				    caracteriza a su conductor.
				</h5>
		          <li className="ml-2 text-white">Conducción: José "gallego" Calvo </li>
				  <li className="ml-2 text-white">Operación técnica: Santiago Brescia</li>
				</Col>
		          <Col md="6">
		            <img className="img-fluid" src="assets/images/programas/hablandoclaro.jpg" alt="hablandoclaro" />
		          </Col>
		      </Row>


             <Row id="notorius" className="bg-1 mt-2 borderprogram">
            <Col md="6" className="order-md-2">
	           <h2 className="text-white mt-2 ml-2">Notorious</h2>
				<h4 className="text-white ml-2">Sábados de 17:00hs a  20:00hs
                </h4>
				<h5 className="text-white ml-2">
				    Las tardes del sábado son más agradables con toda la música que Gabi te trae. Tres horas de compañía musical con clásicos de todas las épocas y estilos musicales, además de la interacción con los oyentes, hacen que este programa tenga una magia especial.
				</h5>
	            <li className="text-white ml-2"> Conductora: Gabriela Ganim</li>
                <li className="text-white ml-2"> Operación técnica: Santiago Brescia</li>
	          </Col>
	          <Col md="6">
	            <img className="d-none d-lg-flex" height={300} width={490}src="assets/images/programas/gabriela.jpeg" alt="Notorius" />
                <img
                className="img-fluid d-lg-none"
                src="assets/images/programas/gabriela.jpeg" alt="img La100" />
	          </Col>
	      </Row>

						
        <Row id="unespacioparavos" className="bg-4 mt-2 borderprogram">
            <Col md="6">
				<h2 className="text-white mt-2 ml-2">Un espacio para vos</h2>
				    <h4 className="text-white ml-2"> Domingo 9:00hs a 10:00hs
				    </h4>
				    <h5 className="text-white ml-2">
				        Comenzamos el domingo con poesia, música, historia,
				        todo esto te trae este espacio.
				    </h5>
				        <li className="ml-2 text-white">Conducción: Ana Maria Carabetta </li>
				        <li className="ml-2 text-white">Operación técnica: Santiago Brescia</li>
				</Col>
				<Col md="6">
				    <img className="img-fluid" src="assets/images/programas/unespacioparavos.jpg" alt="unespacioparavos" />
				</Col>
            </Row>
				
        <Row id="2x4" className="bg-5 mt-2 borderprogram2">
            <Col className="order-md-2">
				<h2 className="text-white mt-2 ml-2">2x4</h2>
				    <h4 className="text-white ml-2">Domingo de 10:00hs a 12:00hs
                    </h4>
				    <h5 className="text-white ml-2">
				        Programa exclusivamente de Tango y Jazz,
				        recorremos autores de antaño con toda la información
				        de estos y disfrutamos de la música ciudadana.
				    </h5>
				    <li className="ml-2 text-white">Conducción: Oscar De Dios</li>
                    <li className="ml-2 text-white">Operación técnica: Santiago Brescia</li>
				</Col>
				<Col md="6" className="order-md-1">
				    <img className="img-fluid" src="assets/images/programas/tango.jpg" alt="2x4" />
				</Col>
        </Row>
			</div>
	  )
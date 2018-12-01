//Dependencis
import React from 'react';
import { Row, Col } from 'reactstrap';

//Componentes
import Buttons from './Buttons.js';

export default () => (
	<div>
        <Buttons />
        <hr />
    
        <Row id="de7a8" className="bg-brown">
          <Col md="6">
            <h2 className="text-white ml-2 mt-2">"De 7 a 8"</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 7.00hs a 8.00hs</h4>
				<h5 className="text-white ml-2 rubik"> Empezas tu día y          Martín junto al Gallego,
				 en una hora de programación te informan y debaten de los
				 acontecimientos locales y nacionales. Un programa con una
				 jugosa editorial política realizada por ambos conductores del
				 ciclo.
				</h5>
				<p className="lead ml-2 text-white">Conductores: Martín García y José Calvo.</p>
				<p className="lead ml-2 text-white">Operación técnica: Luciano Ocaño</p>
          </Col>
          <Col md="6">
            <img className="img-fluid" src="assets/images/programas/de7a8.jpg" alt="Img de7a8" />
          </Col>
        </Row>

        
        <Row id="radiomovil" className="bg-coral mt-2">
          <Col md="6" className="order-md-2">
            <h2 className="text-white mt-2 ml-2"> Radio Móvil </h2>
				<h4 className="text-white ml-2">Lunes a viernes de 8.00hs a 13.00hs</h4>
                <h5 className="lead text-white ml-2">Radio Móvil es el programa central de nuestra emisora,
				con 5hs diarias donde te informamos a nivel nacional, provincial y local de lo que acontece.
				Música, información, entrevistas, columnas semanales de interés general y un móvil
				desde exteriores en constante contacto con la calle son la clave del éxito de este programa
				con xx años al aire</h5>
				<p className="text-white ml-2">Conductor: Mauricio Garcia. Móvil de exteriores: Leonardo Ledesma. Operacion técnica: Luciano Ocaño</p>
          </Col>
          <Col className="order-md-1">
            <img className="img-fluid"  src="assets/images/programas/mic.jpg" alt="img RM" />
          </Col>
        </Row>



		<Row id="tophits" className="bg-primary mt-2">
            <Col md="6">
            <h2 className="text-white ml-2 mt-2">Top Hits</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 13.00hs a 15.00hs</h4>
				<h5 className="text-white ml-2">
				La actualidad musical la encontrás acá. Pop, reggaeton, trap y todo lo que se esta escuchando. lanzamientos con lujo de detalles de cada canción y artista. Una buena compañía musical en tus tardes.
				</h5>
				<p className="lead text-white ml-2">Conductora: Natalia Ferlaino</p>
          </Col>
          <Col md="6">
            <img className="d-none d-md-flex" src="assets/images/programas/top.jpg" height={300} width={490} alt="tophits" />
            <img
            className="img-fluid d-md-none"
            src="assets/images/programas/top.jpg" alt="img La100" />
          </Col>
        </Row>


		<Row id="elexpresso" className="bg-burlywood mt-2">
            <Col md="6" className="order-md-2">
                <h2 className="text-white ml-2">El Expreso</h2>
                <h4 className="text-white ml-2">Lunes a viernes de 15.00hs a 16.00hs</h4>
                <p className="text-white ml-2">
                    Recorremos el universo del sonido con vos y te invitamos a realizar un viaje por la música del mundo, en un recorrido por el tiempo y el espacio con los mejores sonidos del planeta. Ricardo Martínez Puente es nuestro guía conduciendo una exquisita y variada selección musical, la data para que te enteres paso a paso de lo que ocurre con los grupos o solistas más importantes, además de las noticias más curiosas del mundo. La cita está hecha, solo falta que vos te subas al expreso.
                </p>
            </Col>
            <Col  md="6">
                <img className="img-fluid"  src="assets/images/programas/elexpresso.jpeg" alt="expreso" />
            </Col>
		</Row>


		<Row id="sincassette" className="bg-chocolate mt-2">
            <Col  md="6">
            <h2 className="text-white ml-2 mt-2">Sin Cassette</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 18.00hs a 20.00hs</h4>
				<h5 className="text-white ml-2">
				Apuntamos a lo que el nombre indica, sacarse el cassette a
				la hora de acompañarte. Sin extructura, mucha música,
				informaciones locales, juegos e interacción con la audiencia
				de forma diaria, todo esto comprimido en 2hs hacen que el
				dinamismo sea constante para vos que tu tarde sea mas livianaa
				</h5>
				<p className="text-white ml-2">Conductor y operacion tecnica: Facundo Membrilla</p>
            </Col>
          <Col md="6">
            <img height={300} width={490}
                className="d-none d-md-flex"
                src="assets/images/programas/cassette2.jpg" alt="sincassette" />
            <img
            className="img-fluid d-md-none"
            src="assets/images/programas/cassette2.jpg" alt="sincassette" />
          </Col>
        </Row>

				

        <Row id="encompania" className="bg-cadetblue mt-2">
			<Col md="6" className="order-md-2">
				<h2 className="text-white mt-2 ml-2">En Compania</h2>
				<h4 className="text-white ml-2">Lunes a viernes de 18:30 a 20hs</h4>
				<h6 className="lead text-white ml-2">
					Cae la tarde y llegamos para acompañarte e invitarte a reflexionar
					junto a nosotros. Un programa basado en textos y audios de consejos
					para vivir mejor es lo que traemos, sumado a la sabiduría y
					sensibilidad de quien la conduce.
				</h6>
				<p className="text-white ml-2"> Conductora: María del Carmen Laria. Operacíon técnica: Facundo Membrilla</p>
			</Col>
			<Col md="6" className="order-md-1">
				<img className="img-fluid"  src="assets/images/programas/encompañia.jpg" alt="encompañia" />
			</Col>
        </Row>

			

		<Row id="fm100" className="bg-darckgoldenrod mt-2">
            <Col md="6">
                <h2 className="text-white mt-2 ml-2">La 100</h2>
					<h4 className="text-white ml-2">Lunes a viernes de 20 a 21hs</h4>
					<h5 className="text-white ml-2">Segui escuchando la mejor musica de la mano de la 100</h5>
          </Col>
          <Col md="6">
            <img height={300} width={490} 
            className="d-none d-md-flex"
            src="assets/images/programas/dial.jpeg" alt="img La100" />
            <img
            className="img-fluid d-md-none"
            src="assets/images/programas/dial.jpeg" alt="img La100" />
          </Col>
      </Row>

				
        <Row id="notorius" className="bg-1 mt-2">
            <Col md="6" className="order-md-2">
	           <h2 className="text-white mt-2 ml-2">Notorious</h2>
				<h4 className="text-white ml-2">Sábados de 17:00hs a  20:00hs
                </h4>
				<h5 className="text-white ml-2">
				    Las tardes del sábado son mas agradables con toda la musica que Gabi te trae. Tres horas de compañía musical con clásicos de todas las épocas y estilos musicales, además de la interacción con los oyentes, hacen que este programa tenga una magia especial.
				</h5>
	            <p className="lead text-white ml-2"> Conductora: Gabriela Ganim</p>
	          </Col>
	          <Col md="6">
	            <img className="d-none d-md-flex" height={300} width={490}src="assets/images/programas/onair.jpeg" alt="Notorius" />
                <img
                className="img-fluid d-md-none"
                src="assets/images/programas/onair.jpeg" alt="img La100" />
	          </Col>
	      </Row>

					
        <Row id="manosalaobra" className="bg-2 mt-2">
		      <Col md="6">
		        <h2 className="text-white mt-2 ml-2">Manos a la obra</h2>
				    <h4 className="text-white ml-2">Sabados de 9:30hs a 10:30hs
                    </h4>
				    <h5 className="text-white ml-2">Editorial y
				    pensamiento es lo que manos a la obra te trae, reflexón en
				    vivo junto entrevistados de la situacion politica y cultural
				    actual.
				    </h5>
                        <p className="lead ml-2 text-white">Conduccion: Fransisco Álvarez de Toledo</p>
                        <p className="lead ml-2 text-white">Operación técnica: Santiago Brescia</p>
		      </Col>
		      <Col md="6">
		          <img src="assets/images/programas/manosalaobra.jpg" className="img-fluid"  alt="manosalaobra" />
		      </Col>
		    </Row>

					
        <Row id="hablandoclaro" className="bg-3 mt-2">
		  <Col className="col-md-6 order-md-2">
		      <h2 className="text-white mt-2 ml-1"> Hablando claro </h2>
                <h4 className="text-white ml-1"> Domingo 9:00hs a 10:00hs
				</h4>
				<h5 className="text-white ml-1">
				    El programa político por exelencia de nuestra emisora,
				    más de 30 años de aire consecutivo avalan nuestro trabajo.
				    entrevistados columnas y editoriales con la seriedad que
				    caracteriza a su conductor.
				</h5>
		          <p className="lead ml-1 text-white">Conduccion: José "gallego" Calvo </p>
				  <p className="lead ml-1 text-white">Operación técnica: Santiago Brescia</p>
				</Col>
		          <Col md="6">
		            <img className="img-fluid" src="assets/images/programas/hablandoclaro.jpg" alt="hablandoclaro" />
		          </Col>
		      </Row>

						
        <Row id="unespacioparavos" className="bg-4 mt-2">
            <Col md="6">
				<h2 className="text-white mt-2 ml-2">Un espacio para vos</h2>
				    <h4 className="text-white ml-2"> Domingo 9:00hs a 10:00hs
				    </h4>
				    <h5 className="text-white ml-2">
				        Comenzamos el domingo con poesia, musica, historia,
				        todo esto te trae este espacio.
				    </h5>
				        <p className="lead ml-2 text-white">Conduccion: Ana Maria Carabetta </p>
				        <p className="lead ml-2 text-white">Operación técnica: Santiago Brescia</p>
				</Col>
				<Col md="6">
				    <img className="img-fluid" src="assets/images/programas/unespacioparavos.jpg" alt="unespacioparavos" />
				</Col>
            </Row>
				
        <Row id="2x4" className="bg-5 mt-2">
            <Col className="order-md-2">
				<h2 className="text-white mt-2 ml-2">2x4</h2>
				    <h4 className="text-white ml-2">Sabados de 10:00hs a 12:00hs
                    </h4>
				    <h5 className="text-white ml-2">
				        Programa exclusivamente de Tango y Jazz,
				        recorremos autores de ataño con toda la informacion
				        de estos y disfrutamos de la música ciudadana.
				    </h5>
				    <p className="lead ml-2 text-white">Conduccion: Oscar De Dios</p>
                    <p className="lead ml-2 text-white">Operación técnica: Santiago Brescia</p>
				</Col>
				<Col md="6" className="order-md-1">
				    <img className="img-fluid" src="assets/images/programas/tango.jpg" alt="2x4" />
				</Col>
        </Row>
		<hr />
			</div>
	  )
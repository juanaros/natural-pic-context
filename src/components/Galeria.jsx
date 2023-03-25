import "../assets/css/galeria.css";
import Heart from "./Heart";
import React, { useContext } from "react";
import Context from "../Context";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const { pics, setPics } = useContext(Context);

  const favPics = (id) => {
    const picIndex = pics.findIndex((pic) => pic.id === id);
    pics[picIndex].liked = !pics[picIndex].liked;
    setPics([...pics]);
  };

  return (
    
    <Container className="galery p-3"> 
      <Row>
        {pics.map(pic => (<Col lg="3" md="6">
        <div key={pic.id} className="foto m-1" style={{backgroundImage: `url(${pic.src.tiny})`}}>
          <Heart filled={(pic.liked)} onClick={() => favPics(pic.id)} />
          <p>{pic.alt}</p>
        </div></Col>
      ))}
      </Row>
    </Container>
  );
}

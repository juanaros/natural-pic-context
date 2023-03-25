import { useContext } from "react";
import Context from "../Context";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Heart from "../components/Heart";


export default function Favoritos() {
  const { pics, setPics } = useContext(Context);

  const deleteFav = (id) => {
    const picIndex = pics.findIndex((p) => p.id === id);
    pics[picIndex].liked = !pics[picIndex].liked
    setPics([...pics])
  }
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <h3>Aqui mostraremos tus fotos favoritas</h3>
      <div>
      <Container className="galery p-3"> 
      <Row>
        {pics.filter((pic) => pic.liked).map((pic) => (
          <Col lg="3" className="mb-3">
          <div key={pic.id} className="foto" style={{backgroundImage: `url(${pic.src.tiny})`}}>
                <Heart filled={(pic.liked).toString()} onClick={() => deleteFav(pic.id)} />
                <p>{pic.alt}</p>
              </div></Col>
        ))}
              </Row>
          </Container>
      </div>
    </div>
  );
}

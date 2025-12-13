import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Card } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import { blog } from './Data/blog';

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  // let name = "Babli";
  // let l = [1,2,3,4,5];
  // let obj = {name:"Mangru", age:70};
  let headerInfo = {
    email: "push@gmail.com",
    phone: "9983898084"
  }

  return (
    <div className="App">
      {/* <h1>{name}</h1>
      {l.map((v)=>{
        return(
          <div>{v}</div>
        )
      })}
      <div>
        {obj.name} is {obj.age} years old.
      </div> */}
      <Header headerInfo={headerInfo} cname="pushkar">
        <h1>This is children props</h1>
        <FontAwesomeIcon className='text-danger' icon={['fab', 'google']} />
        <FontAwesomeIcon className='color-green' icon={['fab', 'whatsapp']} />
        <FontAwesomeIcon icon={['fab', 'meta']} />
      </Header>
      {/* <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}


      {/* <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py">
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col ls="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col ls="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col ls="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col ls="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Container>
        <Row>
          {blog.map((v, i) => {
            return (
              <ProductItems pitems={v} key={i} />
            )
          })}

        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

// function Card() {
//   return (
//     <div className='items'>card</div>
//   )
// }

function ProductItems({ pitems }) {
  return (
    <div className='col-lg-3 mb-4 d-flex'>
      <Card className='product-card w-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text className='flex-grow-1 overflow-auto'>
            {pitems.body}
          </Card.Text>
          <Button variant="primary" className='mt-auto'>{pitems.id}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
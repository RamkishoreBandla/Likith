import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import DynamicInputs from './DynamicInputs';
import Info from './Info';
import { Link } from 'react-router-dom';

const NavComp = () => {

  const navigate = useNavigate();

  return (<>

    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={e => navigate("/")} className='text-bold'>Input Space Partioning</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/info">Home</Nav.Link>
          <Nav.Link as={Link} to="/tool">Tool</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route exact path="/" element={<Info />} />
      <Route path="/info" element={<Info />} />
      <Route path="/tool" element={<DynamicInputs />} />
    </Routes>
  </>)

}
export default NavComp;


